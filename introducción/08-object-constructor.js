class Tarea{
    constructor(nombre, tarea){
        this.nombre = nombre;
        this.tarea = tarea;
    }
}

const tarea1 = new Tarea('Pasear al perro', 'Media');

const persona = {
    nombre = 'Juan',
    edad = 30,
    nacimiento = function(){
        return new Date().getFullYear() - this.edad; // Es necesario utilizar la cláusula this
    }
}

console.log(persona.nacimiento);