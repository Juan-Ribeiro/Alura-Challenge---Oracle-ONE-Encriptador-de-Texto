botonCopiar.addEventListener("click", function () {

    navigator.clipboard.writeText(campoTextoResultante.value).then(function () {
    });

});