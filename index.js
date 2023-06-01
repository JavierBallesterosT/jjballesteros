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
        imagen.src = "./img/encriptado.jpeg";
    }   else{
        imagen.src = "./img/encrip-desencrip.jpeg";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent ="Ingresa el texto que deseas encriptar o desencriptar";
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
        imagen.src = "./img/desincriptar.jpg";

    }   else{
        imagen.src = "./img/encrip-desencrip.jpeg";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent ="Ingresa el texto que deseas encriptar o desencriptar";
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