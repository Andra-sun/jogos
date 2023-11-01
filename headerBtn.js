function togglePesquisa() {
    var caixaDePesquisa = document.getElementById("caixaDePesquisa");
    var voltarElement = document.getElementById("voltar");

    if (
        caixaDePesquisa.style.display === "none" ||
        caixaDePesquisa.style.display === ""
    ) {
        caixaDePesquisa.style.display = "block";
        caixaDePesquisa.focus();
        caixaDePesquisa.classList.add("fadeIn"); // Adiciona a classe de animação
        voltarElement.style.display = "block"; // Mostra o elemento 'voltar'
    } else {
        caixaDePesquisa.style.display = "none";
        voltarElement.style.display = "block"; // Mostra o elemento 'voltar' mesmo quando a pesquisa é desativada
    }
}

document.getElementById("voltar").addEventListener("click", function () {
    location.reload();
});
