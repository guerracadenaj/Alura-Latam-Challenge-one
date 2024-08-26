var inputText = document.querySelector(".input__texto");
var outputText = document.querySelector(".output__texto");
var instruccion = document.querySelector(".instruccion");
var mensaje = document.querySelector(".mensaje");



function validacion(e){
    var key = e.keyCode || e.which;
    var tecla = String.fromCharCode(key).toString();
    var permitidas = " abcdefghijklmnñopqrstuvwxyz";
    var teclaEnter = 13;
    var teclaEspecial = false;



    if (key=== teclaEnter){
        teclaEspecial = true;
    }
    if(permitidas.indexOf(tecla) == -1 && !teclaEspecial) {
        alert ("Ingresa solo letras minúsculas. No se aceptan acentos, caracteres especiales y números");
        return false;
    }
}

function resultadoEncriptar(){
    var textoEncriptado = encriptar(inputText.value);

    if(inputText.value.length == 0) {
        instruccion.style.display = "inline-flex"; 
        mensaje.style.display = "none"; 
        inputText.focus();
    } else {
        outputText.value = textoEncriptado; 
        inputText.value = ""; 
        instruccion.style.display = "none";  
        mensaje.style.display = "inline-flex"; 
        outputText.focus();
    }
}

function encriptar(textoCapturado) {
    let llavesEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    textoCapturado = textoCapturado.toLowerCase(); 

    for(i = 0; i < llavesEncriptacion.length; i++) {
        if(textoCapturado.includes(llavesEncriptacion[i][0])) {
            textoCapturado = textoCapturado.replaceAll(llavesEncriptacion[i][0], llavesEncriptacion[i][1]);
        }
    }
    
    return textoCapturado;
}
function copiar() {
    outputText.select(); 
    outputText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(outputText.value);
}
function resultadoDesencriptar() {
    var textoDesencriptado = desencriptar(inputText.value);

    if(inputText.value.length == 0) {
        instruccion.style.display = "inline-flex"; 
        mensaje.style.display = "none"; 
        inputText.focus();
    } else {
        outputText.value = textoDesencriptado;
        inputText.value = ""; 
        instruccion.style.display = "none"; 
        mensaje.style.display = "inline-flex"; 
        outputText.focus();
    }
} 

function desencriptar(textoCopiado) {
    let llavesEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    
    textoCopiado = textoCopiado.toLowerCase();

    for(i=0; i < llavesEncriptacion.length; i++) {
        if(textoCopiado.includes(llavesEncriptacion[i][1])) {
            textoCopiado = textoCopiado.replaceAll(llavesEncriptacion[i][1], llavesEncriptacion[i][0]);
        }
    }
    return textoCopiado; 
}