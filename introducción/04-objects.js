/* Object literal */
const persona = {
    nombre: 'Juan',
    apellido: 'Sánchez',
    edad: 30,
    trabajo: true,
    musica: ['Rock', 'Pop'],
    hogar: {
        ciudad: 'La Plata',
        pais: 'Argentina'
    }
}

/* Formas de acceder a los campos */
console.log(persona.hogar.ciudad);
console.log(persona['hogar']['ciudad']);