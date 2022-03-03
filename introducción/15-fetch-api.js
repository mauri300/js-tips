/*
<body>
    <h1>Introducción a JS</h1>
    <div id="app"></div>
</body>
*/

function descargarUsuario(){
    const api = 'URL';
    fetch(api)
        .then(respuesta => respuesta.json())
        .then(datos => imprimirHTML(datos.result));
}

function imprimirHTML(datos){
    datos.foreach(usuario => {
        const li = document.createElement('li');
        const{name:{first}, name:{last}, picture:{medium}, nat} = usuario; // Object destructuring
        li.innerHTML = `Nombre: ${first} ${last}
                        Pais: ${nat}
                        Imagen: <img src="${medium}>`;
        document.querySelector('#app').appendChild(li);

    });
}