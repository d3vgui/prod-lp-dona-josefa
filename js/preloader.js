document.addEventListener("DOMContentLoaded", function() {
    let preloader = document.getElementById("preloader");
    let body = document.body;

    // Impede a rolagem da tela
    body.classList.add("no-scroll");

    setTimeout(() => {
        preloader.style.opacity = "0";  // Suaviza a saída do preloader
        preloader.style.visibility = "hidden"; // Torna invisível após a animação

        // Permite a rolagem novamente
        body.classList.remove("no-scroll");
    }, 3000);  // Ajustado para 3 segundos (3000ms)
});
