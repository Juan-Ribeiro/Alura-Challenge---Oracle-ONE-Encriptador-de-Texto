botonEncriptar.addEventListener("click", function () {

    let textoIngresado = campoTextoIngresado.value;
    campoTextoResultante.value = encriptarTexto(textoIngresado);

});

function encriptarTexto(textoIngresado) {
    return textoIngresado.replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");
}