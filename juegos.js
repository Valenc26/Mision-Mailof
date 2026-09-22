let boton = document.querySelector("#comenzar");

boton.addEventListener("click", function() {

    document.querySelector("#nivel1").style.display = "block";

    

});

let respuestas = document.querySelectorAll(".respuesta");

respuestas.forEach(function(respuesta) {

    respuesta.addEventListener("click", function() {

        if (respuesta.dataset.correcta === "true") {
            document.querySelector("#resultado").textContent = "🎉 Ejjj, obvio no se te iba olvidar mi lof! ❤️";
            document.querySelector("#nivel2").style.display = "block";
        } else {
            document.querySelector("#resultado").textContent = "😏 Mmm... esa no era. ¡Intenta otra vez!";
        }

    });

    
    
});

const respuestas2 = document.querySelectorAll(".respuesta2");
const resultado2 = document.getElementById("resultado2");

respuestas2.forEach(function(boton) {
    boton.addEventListener("click", function() {

        if (boton.dataset.correcta === "true") {
            resultado2.textContent = " No voy a olvidar las margatitas de crisantemo🌼 ";
            document.querySelector("#nivel3").style.display = "block";
        } else {
            resultado2.textContent = "😏 Mmm... esa no es. Inténtalo otra vez.";
        }

    });
});

const palabraSecreta = document.querySelector("#palabraSecreta");
const desbloquear = document.querySelector("#desbloquear");
const resultado3 = document.querySelector("#resultado3");

desbloquear.addEventListener("click", function() {

    const palabra = palabraSecreta.value.trim().toLowerCase();

    if (palabra === "mailof") {
        resultado3.textContent = "🔓 ¡Archivo desbloqueado! ❤️";
        document.querySelector("#nivel4").style.display = "block";


    } else {
        resultado3.textContent = "🚨 Acceso denegado... Esa no es la palabra secreta 😏";
    }

});

const siguiente4 = document.querySelector("#siguiente4");
const nivel4 = document.querySelector("#nivel4");
const nivel5 = document.querySelector("#nivel5");

siguiente4.addEventListener("click", function() {

    nivel4.style.display = "none";
    nivel5.style.display = "block";

});


const siguiente5 = document.querySelector("#siguiente5");
const nivel6 = document.querySelector("#nivel6");

siguiente5.addEventListener("click", function() {

    nivel5.style.display = "none";
    nivel6.style.display = "block";

});

