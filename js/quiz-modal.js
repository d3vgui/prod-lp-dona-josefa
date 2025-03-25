setTimeout(() => {
    document.getElementById("quiz-modal").classList.add("show");
    document.body.classList.add("no-scroll");
}, 22000);

function verificarResposta(event) {
    event.preventDefault();
    const resposta = document.querySelector('input[name="quiz"]:checked');
    const quizMessage = document.getElementById("quiz-message");
    const quizTitle = document.getElementById("quiz-title");

    if (resposta && resposta.value === "Paris") {
        quizMessage.textContent = "¡Respuesta correcta! Felicitaciones, has ganado 1 año de envío gratis. Deja tu email para que podamos enviarte los detalles.";
    } else {
        quizMessage.textContent = "Felicitaciones por intentarlo, ¡obtuviste 1 año de envío gratis! Deja tu email para que podamos enviarte los detalles.";
    }

    quizTitle.textContent = "FELICIDADES";

    document.getElementById("quiz-form").classList.add("hidden");
    document.getElementById("quiz-result").classList.remove("hidden");
    return false;
}

function fecharQuizModal(event) {
    event.preventDefault();
    const modal = document.getElementById("quiz-modal");
    modal.classList.remove("show");
    document.body.classList.remove("no-scroll");
    
    setTimeout(() => {
        modal.style.display = "none";
    }, 500);
}

function fecharQuizModalEmail(event) {
    event.preventDefault();
    const emailInput = document.getElementById("email");
    const errorMessage = document.getElementById("email-error");
    const modal = document.getElementById("quiz-modal");

    if (emailInput.value.trim() === "") {
        errorMessage.textContent = "Proporcione una dirección de correo electrónico válida antes de continuar.";
        emailInput.style.border = "2px solid red";
        return;
    }

    errorMessage.textContent = "";
    emailInput.style.border = "";

    modal.classList.remove("show");
    document.body.classList.remove("no-scroll");

    setTimeout(() => {
        modal.style.display = "none";
    }, 500);
}
