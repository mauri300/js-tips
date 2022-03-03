/* Se puede utilizar comillas simples o dobles */
let nombre;
nombre = 'Juan';
let apellido = "Suárez"; 

/* Barra invertida para indicar que no es comilla de cierre */
let mensaje = 'Don\'t do that';

/* Manipulando Strings */
let aprendiendo = 'Aprendiendo',
    tecnologia = 'JavaScript';

console.log(aprendiendo + ' ' + tecnologia); 
console.log(`${aprendiendo} ${tecnologia}`);

aprendiendo.length; // Retorna cuantos caracteres tiene el string
aprendiendo.concat(" ", "JavaScript"); // Separado y string a concatenar
aprendiendo.toUpperCase(); 


let actividad = 'Ahora estoy aprendiendo JavaScript';
let partes = actividad.split(' '); // El argumento es el separador
/* partes = ['Ahora', 'estoy', 'aprendiendo', 'JavaScript'] */

let actividad2 = actividad.replace('JavaScript', 'JS');
console.log(actividad.includes('JavaScript')); // Retornará false