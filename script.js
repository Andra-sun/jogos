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

function buscarJogo() {
    const termo = document
        .getElementById("caixaDePesquisa")
        .value.toLowerCase();
    const jogos = document.getElementsByClassName("jogo");

    Array.from(jogos).forEach((jogo) => {
        const nomeDoJogo = jogo
            .getElementsByTagName("h2")[0]
            .innerText.toLowerCase();
        if (nomeDoJogo.includes(termo)) {
            jogo.style.display = "block";
        } else {
            jogo.style.display = "none";
        }
    });
}
