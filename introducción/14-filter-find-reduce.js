const personas = [
    {nombre: 'Juan', edad: 20},
    {nombre: 'Pedro', edad: 50},
    {nombre: 'Santiago', edad: 23},
    {nombre: 'Maria', edad: 19},
    {nombre: 'Nahuel', edad: 42},
];

const mayores = personas.filter(personas => persona.edad > 25);

const maria = personas.find(personas => persona.nombre === 'Maria');

/* con reduce se obtiene un acumulado de los registros */
let total = personas.reduce((edadTotal, persona) => {
    return edadTotal + persona.edad;
}, 0); // Se establece el valor inicial

console.log(total); // 154

