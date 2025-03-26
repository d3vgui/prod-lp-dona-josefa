setTimeout(() => {
    document.getElementById("modal-bg").style.display = "flex";
}, 4250);

function fecharModal() {
    document.getElementById("modal-bg").style.display = "none";
    setTimeout(() => abrirQuizModal(), 20000); // Aguarda um curto período para abrir o quiz-modal
}

function abrirQuizModal() {
    const modal = document.getElementById("quiz-modal");
    modal.classList.add("show");
    document.body.classList.add("no-scroll");
}


