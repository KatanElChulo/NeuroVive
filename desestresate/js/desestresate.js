
/* =========================
   EJERCICIO DE RESPIRACIÓN
========================= */

const botonRespirar = document.getElementById("botonRespirar");
const circuloRespiracion = document.getElementById("circuloRespiracion");
const textoRespiracion = document.getElementById("textoRespiracion");
const instruccion = document.getElementById("instruccion");

let respiracionActiva = false;
let intervaloRespiracion;


/* Iniciar ejercicio */

botonRespirar.addEventListener("click", function () {

    if (respiracionActiva) {
        detenerRespiracion();
        return;
    }

    respiracionActiva = true;

    circuloRespiracion.classList.add("activo");

    botonRespirar.innerHTML =
        '<i class="bi bi-stop-fill"></i> Detener';

    instruccion.textContent =
        "Sigue el ritmo del círculo y respira tranquilamente.";

    iniciarRespiracion();

});


/* Cambiar instrucciones */

function iniciarRespiracion() {

    let fase = 0;

    const fases = [
        "Inhala",
        "Mantén",
        "Exhala",
        "Descansa"
    ];

    textoRespiracion.textContent = fases[fase];

    intervaloRespiracion = setInterval(function () {

        fase++;

        if (fase >= fases.length) {
            fase = 0;
        }

        textoRespiracion.textContent = fases[fase];

    }, 2000);

}


/* Detener */

function detenerRespiracion() {

    respiracionActiva = false;

    clearInterval(intervaloRespiracion);

    circuloRespiracion.classList.remove("activo");

    textoRespiracion.textContent = "Preparado";

    botonRespirar.innerHTML =
        '<i class="bi bi-play-fill"></i> Comenzar';

    instruccion.textContent =
        "Cuando estés listo, comienza el ejercicio.";

}


/* =========================
   ACTIVIDAD DE MEMORIA
========================= */

const mostrarJuego = document.getElementById("mostrarJuego");
const juego = document.getElementById("juego");
const numeroJuego = document.getElementById("numeroJuego");
const respuestaJuego = document.getElementById("respuestaJuego");
const comprobarJuego = document.getElementById("comprobarJuego");
const resultadoJuego = document.getElementById("resultadoJuego");

let numeroCorrecto;


/* Mostrar juego */

mostrarJuego.addEventListener("click", function () {

    juego.classList.add("visible");

    juego.scrollIntoView({
        behavior: "smooth"
    });

    comenzarJuego();

});


/* Crear número */

function comenzarJuego() {

    numeroCorrecto =
        Math.floor(1000 + Math.random() * 9000);

    numeroJuego.textContent = numeroCorrecto;

    respuestaJuego.value = "";

    resultadoJuego.textContent = "";

    comprobarJuego.disabled = true;


    setTimeout(function () {

        numeroJuego.textContent = "¿Cuál era?";

        comprobarJuego.disabled = false;

        respuestaJuego.focus();

    }, 3000);

}


/* Comprobar respuesta */

comprobarJuego.addEventListener("click", function () {

    const respuesta = respuestaJuego.value;

    if (respuesta === "") {

        resultadoJuego.textContent =
            "Escribe una respuesta.";

        return;
    }


    if (Number(respuesta) === numeroCorrecto) {

        resultadoJuego.textContent =
            "¡Muy bien! Lo recordaste correctamente.";

    } else {

        resultadoJuego.textContent =
            "No pasa nada. Inténtalo nuevamente.";

    }

});
