botonEncriptar.addEventListener("click", function () {
    let textoIngresado = campoTextoIngresado.value;
    campoTextoResultado.value = encriptarTexto(textoIngresado);

    contenedorTextoResultadoNingunMensaje.remove();
    contenedorTextoResultadoDesencriptado.style.display = "flex";
});

function encriptarTexto(textoIngresado) {
    return textoIngresado.replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");
}