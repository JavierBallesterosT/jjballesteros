function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let mapa = document.getElementById("imagen");


    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
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
    let mapa = document.getElementById("imagen");

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
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
/*
function copiar(){ 
    const button = document.querySelector("texto");
    const input = document.querySelector("botoncopiar")
    
}*/