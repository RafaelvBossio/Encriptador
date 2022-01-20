var form = document.querySelector("#form");
var btnEncriptar = document.querySelector("#encriptar");
var btnDesencriptar = document.querySelector("#desencriptar");
var copiar = document.querySelector("#copiar")
var mensaje1 = form.querySelector("#mensaje");
var mensaje2 = form.querySelector("#codigo");

btnEncriptar.addEventListener("click", function (event) {
    event.preventDefault();
    var codificado = codificar(mensaje1.value);
    mensaje2.value = codificado;
    mensaje1.value = "";
});

btnDesencriptar.addEventListener("click", function (event) {
    event.preventDefault();
    var decodificado = decodificar(mensaje1.value);
    mensaje2.value = decodificado;
    mensaje1.value = "";
});

copiar.addEventListener("click", function (event) {
    event.preventDefault();
    mensaje2.select();
    document.execCommand('copy');
});

function codificar(mensaje){
    var codigo = [];

    for (var i = 0; i < mensaje.length; i++){
        if (mensaje[i] == "a"){
            codigo.push("ai")
        } else if (mensaje[i] == "e"){
            codigo.push("enter");
        } else if (mensaje[i] == "i"){
            codigo.push("imes");
        } else if (mensaje[i] == "o"){
            codigo.push("ober");
        } else if (mensaje[i] == "u"){
            codigo.push("ufat");
        } else {
            codigo.push(mensaje[i]);
        }
    }

    return codigo.join("");
}

function decodificar(mensaje){
    var codigo = "";

    var a = mensaje.replace(/ai/g, "a");
    codigo = codigo + a;

    var e = codigo.replace(/enter/g, "e");
    codigo = e;

    var i = codigo.replace(/imes/g, "i");
    codigo = i;

    var o = codigo.replace(/ober/g, "o");
    codigo = o;

    var u = codigo.replace(/ufat/g, "u");
    codigo = u;

    return codigo;
}