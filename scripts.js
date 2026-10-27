
function confirmarPresenca() {
    const responsavel = document.getElementById("responsavel").value.trim();
    const quantidade = document.getElementById("quantidade").value;

    if (responsavel === "") {
        alert("Por favor, informe o nome do responsável!");
        return;
    }

    if (quantidade === "" || Number(quantidade) < 1 || Number(quantidade) > 30) {
        alert("Informe uma quantidade entre 1 e 30 pessoas!");
        return;
    }
console.log("Responsável:", responsavel);
console.log("Quantidade:", quantidade);

    const telefone = "5562981942581";

    const mensagem =
        "🎄 Confirmação de presença - Natal da Família 🎄\n\n" +
        "Responsável pela casa: " + responsavel + "\n" +
        "Quantidade de pessoas: " + quantidade + "\n\n" +
        "Confirmamos nossa presença! ❤️";

    const link = "https://wa.me/" + telefone +
        "?text=" + encodeURIComponent(mensagem);

    window.open(link, "_blank");
}
console.log("Confirmação de presença enviada!")
