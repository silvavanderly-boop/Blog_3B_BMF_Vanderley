// ========================================
// SCRIPT.JS - BLOG
// ========================================

// Aguarda o carregamento completo da página
document.addEventListener("DOMContentLoaded", function () {

    // ========================================
    // CONTADOR DE CURTIDAS
    // ========================================

    const botoesCurtir = document.querySelectorAll(".like-button");

    botoesCurtir.forEach(function (botao) {

        botao.addEventListener("click", function () {

            // Encontra o número de curtidas dentro do botão
            const contador = botao.querySelector("span");

            // Pega o número atual
            let curtidas = Number(contador.textContent);

            // Adiciona uma curtida
            curtidas++;

            // Atualiza o número na tela
            contador.textContent = curtidas;

            // Adiciona a classe para mudar a aparência
            botao.classList.add("curtido");

        });

    });


    // ========================================
    // ANIMAÇÃO DOS CARDS
    // ========================================

    const artigos = document.querySelectorAll("article");

    artigos.forEach(function (artigo, index) {

        // Adiciona um pequeno atraso entre os cards
        artigo.style.animationDelay = (index * 0.15) + "s";

    });


    // ========================================
    // EFEITO NOS LINKS
    // ========================================

    const links = document.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("mouseenter", function () {
            link.style.transition = "0.3s";
        });

    });

});
