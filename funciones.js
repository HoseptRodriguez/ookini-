function calcularPrecio(precioUnitario, cantidad) {
    const total = precioUnitario * cantidad;
    return total;
}
console.log(calcularPrecio(10, 5)); // Output: 50
console.log(calcularPrecio(7, 3)); // Output: 21
console.log(calcularPrecio(15, 2)); // Output: 30


//funcion que decide
function puedeReservar(cantidad){
    if(cantidad <= 2) {
        return true
    }else {
        return false
    }
}
if (puedeReservar(2)) {
    console.log("Puedes reservar tu cata de café");
} else {
    console.log("Lo siento, maximo 2 tazas por persona");
}