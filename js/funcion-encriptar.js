
botonEncriptar.addEventListener("click", function () {

    let textoIngresado = campoTextoIngresado.value;
    campoTextoResultante.value = encriptarTexto(textoIngresado);

});

function encriptarTexto(textoIngresado) {

    let textoEncriptado = "";

    for (let i = 0; i < textoIngresado.length; i++) {
        textoEncriptado += encriptarCaracter(textoIngresado[i]);
    }

    return textoEncriptado;

}

function encriptarCaracter(caracter) {
    switch (caracter) {
        case "a":
            return "ai";
        case "e":
            return "enter"
        case "i":
            return "imes";
        case "o":
            return "ober";
        case "u":
            return "ufat";
        default:
            return caracter;
    }
}