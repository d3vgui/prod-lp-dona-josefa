function fecharQuizModal(event) {
    event.preventDefault();
    const modal = document.getElementById("quiz-modal");
    modal.classList.remove("show");
    document.body.classList.remove("no-scroll");
    
    setTimeout(() => {
        modal.style.display = "none";
    }, 500);
}