botonDesencriptar.addEventListener("click", function () {

    let textoIngresado = campoTextoIngresado.value;
    campoTextoResultado.value = desencriptarTexto(textoIngresado);
    contenedorMunieco.classList.add("ocultar");
    contenedorTextoResultado.classList.remove("ocultar");
});

function desencriptarTexto(textoIngresado) {
    return textoIngresado.replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");
}