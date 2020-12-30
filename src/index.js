import cipher from './cipher.js';

console.log(cipher);

let encodeButton = document.getElementById("encriptar");

encodeButton.onclick = function(){

    let texto = document.getElementById("textoNormal").value;

    let desplazamiento = document.getElementById("ingresoOffset").value;
    let offset = parseInt(desplazamiento); 

    document.getElementById("textoEncriptado").innerHTML = cipher.encode(offset,texto);
}

let decodeButton = document.getElementById("desencriptar");

decodeButton.onclick = function(){

    let textoEnc = document.getElementById("textoNormal").value;

    let offset = document.getElementById("ingresoOffset").value;

    document.getElementById("textoEncriptado").innerHTML = cipher.decode(offset,textoEnc);
}

document.getElementById("borrar").onclick = function(){
    document.getElementById("textoNormal").value = ""
}

document.getElementById("copiar").onclick = function(){
    let copiado = document.getElementById("textoEncriptado");
    copiado.select();
    document.execCommand("copy");

};