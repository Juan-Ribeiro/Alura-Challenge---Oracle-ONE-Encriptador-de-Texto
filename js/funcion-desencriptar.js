botonDesencriptar.addEventListener("click", function () {
    let textoIngresado = campoTextoIngresado.value;
    campoTextoResultante.value = desencriptarTexto(textoIngresado);
});

function desencriptarTexto(textoIngresado) {

    let textoDesencriptado = "";

    let letraActual;
    let posicionLetraActual = 0;
    while (posicionLetraActual < textoIngresado.length) {

        letraActual = textoIngresado[posicionLetraActual];

        switch (letraActual) {
            case "a":
                textoDesencriptado += "a";
                posicionLetraActual += 2;
                break
            case "e":
                textoDesencriptado += "e";
                posicionLetraActual += 5;
                break
            case "i":
                textoDesencriptado += "i";
                posicionLetraActual += 4;
                break
            case "o":
                textoDesencriptado += "o";
                posicionLetraActual += 4;
                break
            case "u":
                textoDesencriptado += "u";
                posicionLetraActual += 4;
                break
            default:
                textoDesencriptado += letraActual;
                posicionLetraActual++;
        }
    }

    return textoDesencriptado;
}