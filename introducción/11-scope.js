/* Utilizando var, la variable es global y se puede acceder a sus valores 
en todo el programa, puediendo reescribirla */
var musica = 'Rock';
if(musica == 'Rock'){
    var musica = 'Pop';
    confirm.log('Dentro del if: ' + musica); // Dentro del if: Pop
}
console.log('Fuera del if: ' + musica); // Fuera del if: Pop

/* Tanto con let como con const, el alcance de la variable esta restringido dentro del bloque if */
let musica = 'Rock';
if(musicia == 'Rock'){
    let muscia = 'Pop';
    confirm.log('Dentro del if: ' + musica); // Dentro del if: Pop
}
console.log('Fuera del if: ' + musica); // Fuera del if: Rock