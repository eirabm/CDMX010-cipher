const cipher = {
  // ...Aqui van las funciones 
  encode: function(offset,texto) {
    
    var resultado = "";
    
    for(var i=0; i < texto.length; i++){
      let char = texto.charCodeAt(i);
  
      if (char >= 65 && char <=  90){
        document.getElementById("textoEncriptado").value = resultado += String.fromCharCode ((char - 65 + offset) % 26 + 65);}
  
      else if (char >= 97 && char <= 122){
        document.getElementById("textoEncriptado").value = resultado += String.fromCharCode ((char - 97 + offset) % 26 + 97);}
  
      else {
        document.getElementById("textoEncriptado").value = resultado += texto.charAt(i);}
    }
  },

  decode: function (offset,textoEnc) {

    var resultado = "";

    var textoPrueba= document.getElementById("textoNormal");
    textoPrueba.value="";
  
    for(var i=0; i < textoEnc.length; i++){
      let char = textoEnc.charCodeAt(i);
  
       if (char >= 65 && char <=  90){
        textoPrueba.value = resultado += String.fromCharCode ((char - 65 + offset) % 26 + 65);}
  
      else if (char >= 97 && char <= 122){
        textoPrueba.value = resultado += String.fromCharCode ((char - 97 + offset) % 26 + 97);}
  
      else {
        textoPrueba.value = resultado += textoEnc.charAt(i);}
    }
  } 
}

export default cipher;
