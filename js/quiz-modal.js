setTimeout(() => {
  const modalBg = document.getElementById("modal-bg");
  if (getComputedStyle(modalBg).display === "none") {
    abrirQuizModal();
  }
}, 20000);

function verificarResposta(event) {
  event.preventDefault();
  const resposta = document.querySelector('input[name="quiz"]:checked')?.value;
  const quizMessage = document.getElementById("quiz-message");
  const quizTitle = document.getElementById("quiz-title");

  quizTitle.textContent = "FELICIDADES";
  quizMessage.textContent =
    resposta === "Ambas opciones"
      ? "¡Respuesta correcta! Felicitaciones, has ganado 1 año de envío gratis. Deja tu correo electrónico y espera un momento para que podamos enviarte los detalles."
      : "Felicitaciones por intentarlo, ¡obtuviste 1 año de envío gratis! Deja tu correo electrónico y espera un momento para que podamos enviarte los detalles.";

  document.getElementById("quiz-form").classList.add("hidden");
  document.getElementById("quiz-result").classList.remove("hidden");
}

function fecharQuizModal(event) {
  if (event) event.preventDefault();

  const modal = document.getElementById("quiz-modal");
  modal.classList.remove("show");
  document.body.classList.remove("no-scroll");

  setTimeout(() => modal.remove(), 500);
}

function fecharQuizModalEmail(event) {
  event.preventDefault();
  const emailInput = document.getElementById("email");
  const errorMessage = document.getElementById("email-error");

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
    errorMessage.textContent =
      "Proporcione una dirección de correo electrónico válida antes de continuar.";
    emailInput.style.border = "2px solid red";
    return;
  }

  errorMessage.textContent = "";
  emailInput.style.border = "";

  fetch("http://localhost:3001/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: emailInput.value }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert("¡Correo electrónico enviado exitosamente!");
        fecharQuizModal();
      } else {
        alert("Error al enviar el correo electrónico.");
      }
    })
    .catch((error) => console.error("Erro:", error));
}
