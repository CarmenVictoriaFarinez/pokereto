/*const API_URL = 'https://jsonplaceholder.typicode.com/';

//Método utilizando fetch
const HTMLResponse = document.querySelector('#app');

//Pintar data utilizando nodos del DOM
const ul = document.createElement('ul');

fetch(`${API_URL}`)
    .then((response) => response.json())
    .then(data => console.log(data))
    //.then((users) => {
       // users.forEach(user => {
            let elem = document.createElement("li");
            elem.appendChild(
                document.createTextNode(`${user.name} - ${user.email}`)
            );
            ul.appendChild(elem);
        //});
        HTMLResponse.appendChild(ul);
        //Utilizando template String 
        //const template = users.map(user => `<li>${user.name} - ${user.email}</li>`);
        //HTMLResponse.innerHTML = `<ul>${template}</ul>`;
   // });*/

/*
//Método antiguo con el objeto XMLHttpRequest.
const  xhr = new XMLHttpRequest();
function onRequestHandler(){
    if(this.readyState === 4 && this.status === 200){
        // 0 = UNSET, no se ha llamado al metodo open.
        // 1 = OPENED, se ha llamado al metodo open.
        // 2 = HEADERS_RECEIVED, se está llamadndo al método send().
        // 3 = LOADING, está cargando, es decir, está recibiendo la respuesta.
        // 4 = DONE, se ha completado la operación.
        const data = JSON.parse(this.response);
        const HTMLResponse = document.querySelector('#app');

        const template = data.map(user =>  `<li>${user.name} - ${user.email}</li>`);
        HTMLResponse.innerHTML = `<ul>${template}</ul>`;
    }
}

xhr.addEventListener('load', onRequestHandler);
xhr.open('GET', `${API_URL}/users`);
xhr.send();*/