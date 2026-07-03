const header = document.querySelector("[data-header]");
const filters = document.querySelectorAll("[data-filter]");
const cases = document.querySelectorAll("[data-category]");
const form = document.querySelector(".contact-form");
const formNote = document.querySelector("[data-form-note]");
const whatsappNumber = "351965695323";
const contactEmail = "rllautomations@gmail.com";

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 16);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const activeFilter = button.dataset.filter;

    filters.forEach((item) => item.classList.toggle("active", item === button));
    cases.forEach((item) => {
      const isVisible = activeFilter === "all" || item.dataset.category.includes(activeFilter);
      item.hidden = !isVisible;
    });
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const message = [
    "Olá, RLL Solutions. Quero falar sobre um projeto.",
    "",
    `Nome: ${data.get("nome") || ""}`,
    `Empresa: ${data.get("empresa") || ""}`,
    `Objetivo: ${data.get("objetivo") || ""}`,
    "",
    `Mensagem: ${data.get("mensagem") || ""}`,
  ].join("\n");
  const subject = encodeURIComponent("Pedido de proposta - RLL Solutions");
  const body = encodeURIComponent(message);

  if (whatsappNumber) {
    formNote.textContent = "A abrir WhatsApp com a mensagem preparada.";
    window.location.href = `https://wa.me/${whatsappNumber}?text=${body}`;
    return;
  }

  formNote.textContent = "A abrir email com a mensagem preparada.";
  window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
});
