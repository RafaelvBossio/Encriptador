var form = document.querySelector("#form");
var btnEncriptar = document.querySelector("#encriptar");
var btnDesencriptar = document.querySelector("#desencriptar");
var copiar = document.querySelector("#copiar")
var mensaje1 = form.querySelector("#mensaje");
var mensaje2 = form.querySelector("#codigo");

btnEncriptar.addEventListener("click", function (event) {
    event.preventDefault();
    mensaje2.value = mensaje1.value;
    mensaje1.value = "";
});

btnDesencriptar.addEventListener("click", function (event) {
    event.preventDefault();
    mensaje1.value = mensaje2.value;
    mensaje2.value = "";
});

copiar.addEventListener("click", function (event) {
    event.preventDefault();
    mensaje2.select();
    document.execCommand('copy');
});