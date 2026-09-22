// ==========================================
// CONTADOR DE CURTIDAS
// ==========================================

const botoes = document.querySelectorAll("article button");

botoes.forEach((botao) => {

    botao.addEventListener("click", () => {

        // Encontra o artigo onde o botão foi clicado
        const artigo = botao.closest("article");

        // Encontra o título do artigo
        const titulo = artigo.querySelector("h2").textContent;

        // Pega o emoji do botão
        const emoji = botao.textContent.includes("❤️") ? "coracao" : "curtida";

        // Cria uma identificação única para cada botão
        const chave = "curtida_" + titulo + "_" + emoji;

        // Verifica se a pessoa já curtiu
        const jaCurtiu = localStorage.getItem(chave);

        if (jaCurtiu === "sim") {

            alert("Você já curtiu este artigo!");

            return;
        }

        // Pega o contador
        const contador = botao.querySelector("span");

        // Aumenta o número de curtidas
        let numero = Number(contador.textContent);

        numero++;

        contador.textContent = numero;

        // Guarda no navegador que já curtiu
        localStorage.setItem(chave, "sim");

        // Desativa o botão
        botao.disabled = true;

        // Muda a aparência
        botao.classList.add("curtido");

    });

});
