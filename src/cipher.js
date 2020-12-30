const cipher = {
  // ...Aqui van las funciones 
  encode: function(offset,texto) {

    if (offset == null) {
      throw new TypeError ('Not Valid');
    } else if (offset == 0) {
      throw new TypeError ('Not Valid');
    }       
    
    let resultado = "";
    
    for(let i=0; i < texto.length; i++){
      let char = texto.charCodeAt(i);
  
      if (char >= 65 && char <=  90){
        resultado += String.fromCharCode ((char - 65 + offset) % 26 + 65);}
  
      else if (char >= 97 && char <= 122){
        resultado += String.fromCharCode ((char - 97 + offset) % 26 + 97);}
  
      else {
        resultado += texto.charAt(i);}
    }
    return resultado;
  },

  decode: function (offset,textoEnc) {

    if (offset == null) {
      throw new TypeError ('Not Valid');
    } else if (offset == 0) {
      throw new TypeError ('Not Valid');
    }       

    let thisOffset = 26 - (offset % 26);

    let resultado = "";

  
    for(let i=0; i < textoEnc.length; i++){
      let char = textoEnc.charCodeAt(i);
  
       if (char >= 65 && char <=  90){
        resultado += String.fromCharCode ((char - 65 + thisOffset) % 26 + 65);}
  
      else if (char >= 97 && char <= 122){
        resultado += String.fromCharCode ((char - 97 + thisOffset) % 26 + 97);}
  
      else {
        resultado += textoEnc.charAt(i);}
    }
    return resultado;
  } 
}

export default cipher;
