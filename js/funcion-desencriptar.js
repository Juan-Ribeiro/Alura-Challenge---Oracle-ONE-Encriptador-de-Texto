botonDesencriptar.addEventListener("click", function () {

    let textoIngresado = campoTextoIngresado.value;
    campoTextoResultante.value = desencriptarTexto(textoIngresado);

});

function desencriptarTexto(textoIngresado) {
    return textoIngresado.replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");
}