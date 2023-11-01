function togglePesquisa() {
    var caixaDePesquisa = document.getElementById("caixaDePesquisa");

    if (
        caixaDePesquisa.style.display === "none" ||
        caixaDePesquisa.style.display === ""
    ) {
        caixaDePesquisa.style.display = "block";
        caixaDePesquisa.focus();
        caixaDePesquisa.classList.add("fadeIn"); // Adiciona a classe de animação
    } else {
        caixaDePesquisa.style.display = "none";
    }
}
