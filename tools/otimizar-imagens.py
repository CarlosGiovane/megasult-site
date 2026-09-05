# -*- coding: utf-8 -*-
"""Normaliza as imagens dos cards para 1200x675 (16:9), JPG otimizado."""
import glob, os, sys
from PIL import Image, ImageOps

TARGET = (1200, 675)
MAX_BYTES = 260 * 1024
FOLDER = "public/images/detalhes"

def process(path):
    before_bytes = os.path.getsize(path)
    with Image.open(path) as im:
        im = ImageOps.exif_transpose(im)
        before = im.size
        if before == TARGET and before_bytes <= MAX_BYTES:
            return (os.path.basename(path), before, before_bytes, None, None)
        im = im.convert("RGB")
        # corta centralizado no 16:9 e reduz para 1200x675
        im = ImageOps.fit(im, TARGET, method=Image.LANCZOS, centering=(0.5, 0.5))
        for q in (85, 82, 80, 78, 75, 72, 70):
            im.save(path, "JPEG", quality=q, optimize=True, progressive=True)
            if os.path.getsize(path) <= MAX_BYTES:
                break
    return (os.path.basename(path), before, before_bytes, TARGET, os.path.getsize(path))

rows = []
for p in sorted(glob.glob(os.path.join(FOLDER, "*.jpg")) + glob.glob(os.path.join(FOLDER, "*.jpeg"))
                + glob.glob(os.path.join(FOLDER, "*.png")) + glob.glob(os.path.join(FOLDER, "*.webp"))):
    rows.append(process(p))

for name, before, bb, after, ab in rows:
    if after is None:
        print("ok      %-24s %sx%s  %6.1f KB (ja estava ideal)" % (name, before[0], before[1], bb/1024))
    else:
        print("ajustou %-24s %sx%s %7.1f KB  ->  %sx%s %6.1f KB" % (
            name, before[0], before[1], bb/1024, after[0], after[1], ab/1024))
