/*
if(...){
    ...
} else if(...){
    ...
} else {
    ...
}

(A === B)
(A !== B)
(A || B)
(A && B)
(A <= B)
*/

/* Operador ternario */
let logueado = true;
console.log(logueado ? 'Si' : 'No');

/* Switch */
const metodoPago = 'tarjeta';
switch(metodoPago){
    case 'efectivo':
        console.log(`Pagase con ${metodoPago}`);
    break;

    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago}, revisaremos tus fondos`);
    break;

    default:
        console.log('Aún no pagaste o el método de pago no es válido');
    break;
}