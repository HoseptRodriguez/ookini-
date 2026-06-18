

//function PuedeReservar (cantidad) {
//        return cantidad <=2;
//}    

//queremos que no se pase de las 50 tazas del dia 

//function puedeReservar(TazasDisponibles) {
//    return TazasDisponibles >0;
//}

//const botonReservar = document.querySelector("#reservar-btn"); //seleccionamos elboton por su id
//agrega un escuchador de eventos, el primer evento es el click, y la segunda es la funcion que se ejecutara cuando el evento ocurra, en este caso es una funcion anonima que imprime un mensaje en la consola
//botonReservar.addEventListener("click", function() {
//    console.log("El usuario hizo click");
//});


//
//const botonReservar = document.querySelector("#boton-reservar");

function calcularPrecio(precioUnitario, cantidad) {
    const total = precioUnitario * cantidad;
    return total;
}

const botonReservar = document.querySelector("#boton-reservar");
const contadorTazas = document.querySelector("#contador-Tazas");

function puedeReservar(tazasDisponibles) {
    return tazasDisponibles > 0;
}

botonReservar.addEventListener("click", function() {

    const tazasActuales = Number(contadorTazas.textContent);

    if (puedeReservar(tazasActuales)) {
        contadorTazas.textContent = tazasActuales - 1;
        alert("¡Reserva realizada! Tazas restantes: " + (tazasActuales - 1));
    }

    if (Number(contadorTazas.textContent) === 0) {
        botonReservar.textContent = "Sin cupos";
        botonReservar.disabled = true;
    }

});