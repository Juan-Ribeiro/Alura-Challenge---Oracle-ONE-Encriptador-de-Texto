botonEncriptar.addEventListener("click", function () {
    let textoIngresado = campoTextoIngresado.value;
    campoTextoResultado.value = encriptarTexto(textoIngresado);

    contenedorTextoResultadoNingunMensaje.style.display = "none";
    contenedorTextoResultadoDesencriptado.style.display = "flex";
});

function encriptarTexto(textoIngresado) {
    return textoIngresado.replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");
}