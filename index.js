function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("imagen");
    let mensaje = document.getElementById('mensaje');

    let textocifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("texto").value = textocifrado;
        document.getElementById("mensaje").value = textocifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        imagen.src = "./img/desincriptar.jpg";
    }   else{
        imagen.src = "./img/encriptado.jpeg";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que desaeas encriptar o desencriptar";
        swal ("Ooops","Debes ingresar un texto", "warning");
    }
}

function desencriptar() {
    let texto = document.getElementById ("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("imagen");
    let mensaje = document.getElementById('mensaje');
    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        document.getElementById("mensaje").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        imagen.src = "./img/encriptado.jpeg";

    }   else{
        imagen.src = "./img/desincriptar.jpg";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que desaeas encriptar o desencriptar";
        swal ("Ooops","Debes ingresar un texto", "warning");

    }
}
function copiara(){
        let mensaje = document.getElementById('mensaje');
        mensaje.select();
        mensaje.setSelectionRange(0,99999);
        document.execCommand('copy');
        swal ("✍","Has copiado texto", "warning");
       
     
}
/*
function copiar(texto){
    if(typeof texto != "string"){
        throw TypeError("El argumento debe ser una cadena de caracteres.");
    }
    let areatexto= document.createElement('textarea');
    areatexto.value= texto;
    areatexto.setAttribute("readonly","");
    areatexto.style.position='absolute';
    areatexto.style.left='-9999px';
    document.body.appendChild(areatexto);
    let seleccionado= document.getSelection().rangeCount > 0 ? document.getSelection().getRangeat(0) : false;
    areatexto.select();
     document.execCommand('copy');
    document.body.removeChild(areatexto);
    if (seleccionado){
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(seleccionado);
    }
}
      window.onload = function(){ 
    document.getElementById("botoncopiar").addEventListener("click",()=>{
        let contenido = document.getElementById("contenido").value;
        copiar(contenido);
    })
}*/

/*texto.clipboard
  .readText()
  .then(
    (clipText) => (document.querySelector(".botcopiar").innerText += clipText)
  );*/
/*
function copiar(){ 
    const button = document.querySelector("texto");
    const input = document.querySelector("botoncopiar")
    
}*/