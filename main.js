var num = parseInt(prompt("ingresar el numero de palabra que desen generar"));
var letras = "abcdefghijklmnopqrstuvxyz";

for (var i = 0; i < num; i++) {
    var palabra = "";
    for (var j = 0; j < num; j++) {
        palabra = palabra + letras[Math.floor(Math.random() * letras.length)];
    }
    console.log(palabra);
}
