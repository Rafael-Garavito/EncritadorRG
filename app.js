function cifrarTexto() {
    var textoOriginal = document.getElementById('textoOriginal').value;
    var textoCifrado = '';

    for (var i = 0; i < textoOriginal.length; i++) {
        var charCode = textoOriginal.charCodeAt(i);

        // Cifrar solo letras minúsculas (97 a 122 según la tabla ASCII)
        if (charCode >= 97 && charCode <= 122) {
            charCode = (charCode - 97 + 1) % 26 + 97;
        }

        textoCifrado += String.fromCharCode(charCode);
    }

    document.getElementById('textoSalida').value = textoCifrado;
    document.getElementById('reiniciar').disabled = false; // Activar botón Descifrar
    document.getElementById('textoSalida').style.backgroundImage = 'none'; // Eliminar imagen de fondo
    document.getElementById('textoOriginal').value = '';
}

function descifrarTexto() {
    var textoCifrado = document.getElementById('textoSalida').value;
    var textoDescifrado = '';

    for (var i = 0; i < textoCifrado.length; i++) {
        var charCode = textoCifrado.charCodeAt(i);

        // Descifrar solo letras minúsculas (97 a 122 según la tabla ASCII)
        if (charCode >= 97 && charCode <= 122) {
            charCode = (charCode - 97 - 1 + 26) % 26 + 97;
        }

        textoDescifrado += String.fromCharCode(charCode);
    }

    document.getElementById('textoOriginal').value = textoDescifrado;
    document.getElementById('reiniciar').disabled = true; // Desactivar botón Descifrar
    document.getElementById('textoSalida').innerText = "Hola, ingresa el texto aquí"; // Restaurar mensaje inicial
    document.getElementById('textoSalida').style.backgroundImage = "url('img/1.png1.png')"; // Colocar imagen de loro
    document.getElementById('textoSalida').value = '';
}