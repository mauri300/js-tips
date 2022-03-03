/* Funciones dentro de objetos */
const musica = {
    reproducir : function(cancion){
        console.log('Reproduciendo: ' + cancion);
    },
    pausar : function(){
        console.log('Pausa');
    }
}

/* Los métodos también pueder estar por fuera del objeto */
musica.borrar = function(id){
    console.log('Borrando la canción: ' + id);
}

musica.reproducir('Killer Queen');
musica.pausar();
musica.reproducir('Sultans of Swing');
musica.borrar(20);