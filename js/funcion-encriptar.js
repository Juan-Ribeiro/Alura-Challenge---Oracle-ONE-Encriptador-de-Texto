let campoTextoIngresado = document.querySelector("#campo-texto-introducido");
let botonEncriptar = document.querySelector("#boton-encriptar");
let campoTextoResultante = document.querySelector("#campo-texto-resultante");

botonEncriptar.addEventListener("click", function () {

    let textoIngresado = campoTextoIngresado.value;
    campoTextoResultante.value = encriptarTexto(textoIngresado);

});

function encriptarTexto(textoIngresado) {

    let textoEncriptado = "";

    for (let i = 0; i < textoIngresado.length; i++) {
        switch (textoIngresado[i]) {
            case "a":
                textoEncriptado += "ai";
                break
            case "e":
                textoEncriptado += "enter";
                break
            case "i":
                textoEncriptado += "imes";
                break
            case "o":
                textoEncriptado += "ober";
                break
            case "u":
                textoEncriptado += "ufat";
                break
            default:
                textoEncriptado += textoIngresado[i];
        }
    }

    return textoEncriptado;

}