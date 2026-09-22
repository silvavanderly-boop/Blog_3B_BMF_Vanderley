// Pega todos os artigos da página
const artigos = document.querySelectorAll("article");

artigos.forEach((artigo, indice) => {

    // Pega os dois botões do artigo
    const botoes = artigo.querySelectorAll("button");

    // Primeiro botão = ❤️
    // Segundo botão = 👍
    botoes.forEach((botao, tipo) => {

        // Cria uma identificação única para cada artigo e botão
        const chave = "blog3b_artigo_" + indice + "_botao_" + tipo;

        // Verifica se esse navegador já curtiu
        if (localStorage.getItem(chave) === "curtiu") {

            botao.disabled = true;
            botao.style.opacity = "0.6";
            botao.style.cursor = "not-allowed";
        }

        botao.addEventListener("click", function () {

            // Se já curtiu, não faz nada
            if (localStorage.getItem(chave) === "curtiu") {
                return;
            }

            // Pega o número dentro do span
            const contador = botao.querySelector("span");

            // Converte o número para inteiro
            let numero = parseInt(contador.textContent);

            // Adiciona uma curtida
            numero++;

            // Atualiza o contador
            contador.textContent = numero;

            // Salva que esse navegador já curtiu
            localStorage.setItem(chave, "curtiu");

            // Desativa o botão
            botao.disabled = true;

            // Efeito visual
            botao.style.backgroundColor = "#6a45a0";
            botao.style.color = "white";
            botao.style.cursor = "not-allowed";
            botao.style.opacity = "0.7";

        });

    });

});
