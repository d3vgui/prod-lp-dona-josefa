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
    resposta === "Agave"
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
  const successMessage = document.getElementById("email-success");

  errorMessage.textContent = "";
  errorMessage.classList.remove("fade-in");
  successMessage.textContent = "";
  successMessage.classList.remove("fade-in");
  emailInput.style.border = "";

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
    errorMessage.textContent = "Proporcione una dirección de correo electrónico válida antes de continuar.";
    errorMessage.style.color = "red";
    errorMessage.classList.add("fade-in");
    emailInput.style.border = "2px solid red";
    return;
  }

  fetch("http://localhost:3001/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: emailInput.value }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        successMessage.textContent = "¡Correo electrónico enviado exitosamente!";
        successMessage.style.color = "green";
        successMessage.classList.add("fade-in");

        setTimeout(() => {
          fecharQuizModal();
        }, 2000); 
      } else {
        errorMessage.textContent = "No se puede enviar correo electrónico. Por favor inténtalo de nuevo.";
        errorMessage.style.color = "red";
        errorMessage.classList.add("fade-in");
      }
    })
    .catch((error) => {
      console.error("Erro:", error);
      errorMessage.textContent = "No se puede enviar correo electrónico. Por favor inténtalo de nuevo.";
      errorMessage.style.color = "red";
      errorMessage.classList.add("fade-in");
    });
}

