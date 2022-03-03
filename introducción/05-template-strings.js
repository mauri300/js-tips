const   nombre = 'Juan',
        trabajo = 'Desarrollador Web';

const contenedorApp = document.querySelector('#mensaje');

let html = `<ul>
                <li>Nombre: ${nombre}</li>
                <li>Trabajo: ${trabajo}</li>
            </ul>`;

contenedorApp.innerHTML = html;