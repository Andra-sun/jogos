const container = document.getElementById("lista-de-jogos");

fetch("listaDosJogos.txt")
    .then((response) => response.text())
    .then((text) => {
        const listaDeJogos = text.split("\n").filter(Boolean);

        fetch("listaDasImagens.txt")
            .then((response) => response.text())
            .then((imagens) => {
                const listaDeImagens = imagens.split("\n").filter(Boolean);

                listaDeJogos.forEach((jogo, index) => {
                    const jogoElement = document.createElement("div");
                    jogoElement.classList.add("jogo");
                    jogoElement.innerHTML = `
                <h2>${jogo}</h2>
                <img src="${listaDeImagens[index]}" alt="${jogo}">
            `;
                    container.appendChild(jogoElement);
                });
            });
    });
