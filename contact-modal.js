/* ============================================================
   MEGASULT — Fale Conosco: modal compartilhado + envio EmailJS
   Requer o SDK EmailJS (CDN) carregado no <head> da página.
   Qualquer elemento com a classe .open-contact-modal abre o modal.
   ============================================================ */
(function () {
  emailjs.init({ publicKey: "uYfnlksCUO2B7Zgm7" });
})();

document.addEventListener("DOMContentLoaded", function () {
  // Injeta os modais uma única vez (páginas que já os tenham no HTML são ignoradas)
  if (!document.getElementById("contactModal")) {
    document.body.insertAdjacentHTML(
      "beforeend",
      '<div class="modal-overlay" id="successModal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">' +
        '<div class="modal-box">' +
        '<div class="modal-icon">✉️</div>' +
        '<h3 id="modalTitle">Mensagem enviada!</h3>' +
        "<p>Recebemos seu contato. Em breve um <strong>consultor Megasult</strong> entrará em contato com você.</p>" +
        '<button class="modal-close" id="modalCloseBtn">Entendido</button>' +
        "</div></div>" +
        '<div class="modal-overlay" id="contactModal" role="dialog" aria-modal="true" aria-labelledby="contactModalTitle">' +
        '<div class="modal-box modal-form-box">' +
        '<button class="modal-x" id="contactModalCloseBtn" aria-label="Fechar">&times;</button>' +
        '<h3 id="contactModalTitle">Fale Conosco</h3>' +
        "<p>Preencha o formulário e nossa equipe entrará em contato com você.</p>" +
        '<form class="contact-form" id="contact-form">' +
        '<input type="hidden" name="to_email" value="carlos@megasult.com.br" />' +
        '<div class="form-row">' +
        '<input type="text" name="name" placeholder="Seu nome" required />' +
        '<input type="text" name="company" placeholder="Empresa" />' +
        "</div>" +
        '<input type="email" name="email" placeholder="E-mail" required />' +
        '<input type="tel" name="phone" placeholder="Telefone" required />' +
        '<textarea name="message" placeholder="Como podemos ajudar sua empresa?" required></textarea>' +
        '<button type="submit" class="btn-primary">Enviar mensagem</button>' +
        "</form></div></div>"
    );
  }

  const form = document.getElementById("contact-form");
  const modal = document.getElementById("successModal");
  const closeBtn = document.getElementById("modalCloseBtn");
  const contactModal = document.getElementById("contactModal");
  const contactCloseBtn = document.getElementById("contactModalCloseBtn");

  function openModal() { modal.classList.add("open"); }
  function closeModal() { modal.classList.remove("open"); }
  function openContactModal() { contactModal.classList.add("open"); }
  function closeContactModal() { contactModal.classList.remove("open"); }

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", function (e) {
    if (e.target === modal) closeModal();
  });

  document.querySelectorAll(".open-contact-modal").forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      const mobileMenu = document.getElementById("mobile-menu");
      if (mobileMenu) mobileMenu.classList.remove("open");
      openContactModal();
    });
  });
  contactCloseBtn.addEventListener("click", closeContactModal);
  contactModal.addEventListener("click", function (e) {
    if (e.target === contactModal) closeContactModal();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { closeModal(); closeContactModal(); }
  });

  form && form.addEventListener("submit", function (e) {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = "Enviando...";
    emailjs.sendForm("service_8wa9d2d", "template_auvix", this)
      .then(function () {
        form.reset();
        btn.disabled = false;
        btn.textContent = "Enviar mensagem";
        closeContactModal();
        openModal();
      })
      .catch(function (err) {
        alert("Erro ao enviar: " + JSON.stringify(err));
        btn.disabled = false;
        btn.textContent = "Enviar mensagem";
      });
  });
});
