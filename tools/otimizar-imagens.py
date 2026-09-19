# -*- coding: utf-8 -*-
"""Normaliza as imagens dos cards para 1200x675 (16:9), JPG otimizado.

Estratégia anti-corte: se a imagem de origem já está bem próxima de 16:9
(diferença de proporção < 2%), faz um corte central quase imperceptível.
Caso contrário — a maioria das imagens de IA/infográfico vem em 3:2, 4:3
ou quase quadrada — a imagem é encaixada inteira dentro do quadro 16:9
(sem cortar nada) com barras brancas nas laterais ou topo/base, porque
essas imagens costumam ter texto/título perto da borda e um corte central
cortaria conteúdo importante.
"""
import glob, os
from PIL import Image, ImageOps

TARGET = (1200, 675)
TARGET_RATIO = TARGET[0] / TARGET[1]
MAX_BYTES = 260 * 1024
RATIO_TOLERANCE = 0.02  # 2% — acima disso, usa letterbox em vez de corte
PAD_COLOR = (255, 255, 255)
FOLDER = "public/images/detalhes"


def process(path):
    before_bytes = os.path.getsize(path)
    with Image.open(path) as im:
        im = ImageOps.exif_transpose(im)
        before = im.size
        if before == TARGET and before_bytes <= MAX_BYTES:
            return (os.path.basename(path), before, before_bytes, None, None, None)

        im = im.convert("RGB")
        src_ratio = before[0] / before[1]
        deviation = abs(src_ratio - TARGET_RATIO) / TARGET_RATIO

        if deviation <= RATIO_TOLERANCE:
            im = ImageOps.fit(im, TARGET, method=Image.LANCZOS, centering=(0.5, 0.5))
            mode = "corte"
        else:
            im = ImageOps.pad(im, TARGET, method=Image.LANCZOS, color=PAD_COLOR, centering=(0.5, 0.5))
            mode = "moldura"

        for q in (85, 82, 80, 78, 75, 72, 70):
            im.save(path, "JPEG", quality=q, optimize=True, progressive=True)
            if os.path.getsize(path) <= MAX_BYTES:
                break
    return (os.path.basename(path), before, before_bytes, TARGET, os.path.getsize(path), mode)


rows = []
for p in sorted(glob.glob(os.path.join(FOLDER, "*.jpg")) + glob.glob(os.path.join(FOLDER, "*.jpeg"))
                + glob.glob(os.path.join(FOLDER, "*.png")) + glob.glob(os.path.join(FOLDER, "*.webp"))):
    rows.append(process(p))

for name, before, bb, after, ab, mode in rows:
    if after is None:
        print("ok      %-24s %sx%s  %6.1f KB (ja estava ideal)" % (name, before[0], before[1], bb / 1024))
    else:
        tag = "corte  " if mode == "corte" else "moldura"
        print("%s %-24s %sx%s %7.1f KB  ->  %sx%s %6.1f KB" % (
            tag, name, before[0], before[1], bb / 1024, after[0], after[1], ab / 1024))
