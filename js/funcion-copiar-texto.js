botonCopiar.addEventListener("click", function () {

    navigator.clipboard.writeText(campoTextoResultado.value).then(function () {
    });

});