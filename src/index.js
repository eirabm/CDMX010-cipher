import cipher from './cipher.js';

console.log(cipher);

let encodeButton = document.getElementById("encriptar");

encodeButton.onclick = function(){

    var texto = document.getElementById("textoNormal").value;

    var desplazamiento = document.getElementById("ingresoOffset").value;
    var offset = parseInt(desplazamiento); 

    var encriptado = cipher.encode(offset,texto);
}

let decodeButton = document.getElementById("desencriptar");

decodeButton.onclick = function(){

    var textoEnc = document.getElementById("textoEncriptado").value;

    var desplazamiento = document.getElementById("ingresoOffset").value;
    var thisOffset = parseInt(desplazamiento); 
    var offset = (26 - thisOffset) % 26;

    var desencriptado = cipher.decode(offset,textoEnc)
}

document.getElementById("borrar").onclick = function(){
    document.getElementById("textoNormal").value = ""
}

document.getElementById("copiar").onclick = function(){
    var copiado = document.getElementById("textoEncriptado")
    copiado.querySelector();
    document.execCommand("copy");

};