// Condicionales de cata abierta o llema 
//si el número de inscritos es menor que el cupo, abrir reserva, sino, ofrecer lista de espera

const cupoCata = 8;
const inscritos = 8;

if (inscritos < cupoCata) {
    console.log("Hay cupo, abrir reserva");
} else {
    console.log("La cata de café ya está llena, ofrecer lista de espera ");
}

