/* ============================================================
   MEGASULT — Modal de detalhes dos cards (serviços/segmentos)
   Requer window.detailData = { chave: { title, body } } definido
   na página antes deste script, e cards com data-detail-key="chave"
   e classe .detail-card.

   IMAGENS: basta salvar o arquivo em public/images/detalhes/ com o
   nome da chave do card (ex.: public/images/detalhes/markup.jpg).
   O modal procura .jpg, .jpeg, .png e .webp nessa ordem e mostra o
   placeholder "Imagem em breve" enquanto nenhum arquivo existir.
   Ver docs/imagens-cards-ia.md.
   ============================================================ */

/* Pasta única das imagens dos cards, resolvida a partir do caminho
   deste script — funciona em qualquer página e em qualquer subpasta
   de publicação (GitHub Pages de projeto, domínio próprio etc.). */
var DETAIL_IMG_DIR = (function () {
  var src = document.currentScript ? document.currentScript.src : "";
  var base = src ? src.replace(/[^/]*$/, "") : "";
  return base + "public/images/detalhes/";
})();
var DETAIL_IMG_EXTS = [".jpg", ".jpeg", ".png", ".webp"];

document.addEventListener("DOMContentLoaded", function () {
  const data = window.detailData;
  const cards = document.querySelectorAll("[data-detail-key]");
  if (!data || !cards.length) return;

  if (!document.getElementById("cardDetailModal")) {
    document.body.insertAdjacentHTML(
      "beforeend",
      '<div class="modal-overlay" id="cardDetailModal" role="dialog" aria-modal="true" aria-labelledby="cardDetailTitle">' +
        '<div class="modal-box detail-modal-box">' +
        '<button class="modal-x" id="cardDetailCloseBtn" aria-label="Fechar">&times;</button>' +
        '<div class="detail-media" id="cardDetailMedia">' +
        '<img id="cardDetailImg" alt="" />' +
        '<div class="detail-img-placeholder" id="cardDetailPlaceholder">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>' +
        "<span>Imagem em breve</span>" +
        "</div>" +
        "</div>" +
        '<h3 id="cardDetailTitle"></h3>' +
        '<div class="detail-body" id="cardDetailBody"></div>' +
        "</div></div>"
    );
  }

  const modal = document.getElementById("cardDetailModal");
  const closeBtn = document.getElementById("cardDetailCloseBtn");
  const titleEl = document.getElementById("cardDetailTitle");
  const bodyEl = document.getElementById("cardDetailBody");
  const imgEl = document.getElementById("cardDetailImg");
  const placeholderEl = document.getElementById("cardDetailPlaceholder");

  function openDetail(key) {
    const item = data[key];
    if (!item) return;
    titleEl.textContent = item.title;
    bodyEl.innerHTML = item.body;

    imgEl.style.display = "none";
    placeholderEl.style.display = "flex";
    imgEl.alt = item.title;

    // Tenta cada extensão até achar o arquivo; se nenhuma existir,
    // mantém o placeholder "Imagem em breve".
    var attempt = 0;
    imgEl.onload = function () {
      placeholderEl.style.display = "none";
      imgEl.style.display = "block";
    };
    imgEl.onerror = function () {
      attempt++;
      if (attempt < DETAIL_IMG_EXTS.length) {
        imgEl.src = DETAIL_IMG_DIR + key + DETAIL_IMG_EXTS[attempt];
        return;
      }
      imgEl.removeAttribute("src");
      imgEl.style.display = "none";
      placeholderEl.style.display = "flex";
    };
    imgEl.src = DETAIL_IMG_DIR + key + DETAIL_IMG_EXTS[0];

    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeDetail() {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }

  cards.forEach(function (card) {
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.addEventListener("click", function () {
      openDetail(card.getAttribute("data-detail-key"));
    });
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openDetail(card.getAttribute("data-detail-key"));
      }
    });
  });

  closeBtn.addEventListener("click", closeDetail);
  modal.addEventListener("click", function (e) {
    if (e.target === modal) closeDetail();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeDetail();
  });
});
