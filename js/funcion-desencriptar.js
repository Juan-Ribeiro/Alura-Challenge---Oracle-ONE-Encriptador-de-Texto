botonDesencriptar.addEventListener("click", function () {
    let textoIngresado = campoTextoIngresado.value;
    campoTextoResultado.value = desencriptarTexto(textoIngresado);
    contenedorTextoResultadoNingunMensaje.classList.add("ocultar");
    contenedorTextoResultadoDesencriptado.classList.remove("ocultar");
});

function desencriptarTexto(textoIngresado) {
    return textoIngresado.replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");
}