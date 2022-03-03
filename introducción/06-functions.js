/* Function declaration: permite declararla despues del llamado*/
saludar();
function saludar(){
    console.log('Hola');
}

/* Function expression: debe ser declarada antes de llamarla */
const suma = function(){
    console.log(1+2);
}
suma();




informar('Juan', 'Desarrollador Web'); // Hola Juan, tu trabajo es: Desarrollador Web
informar('Maria'); // Hola Maria, tu trabajo es: no sabemos
informar(); // Hola visitante, tu trabajo es: no sabemos

function informar(nombre = 'visitante', trabajo = 'no sabemos'){
    console.log('Hola' + nombre +', tu trabajo es: ' + trabajo);
}

/* IIFE: se invocan inmediatamente */
(function(tecnologia){
    console.log(tecnologia);
})('JavaScript');

/* Retorno de valores */
const suma1 = function(a = 0, b = 0){
    return a+b;
}

/* Arrow functions */
const suma2 = (a = 0, b = 0) => a+b;