botonEncriptar.addEventListener("click", function () {

    let textoIngresado = campoTextoIngresado.value;
    campoTextoResultado.value = encriptarTexto(textoIngresado);
    contenedorMunieco.classList.add("ocultar");
    contenedorTextoResultado.classList.remove("ocultar");

});

function encriptarTexto(textoIngresado) {
    return textoIngresado.replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");
}