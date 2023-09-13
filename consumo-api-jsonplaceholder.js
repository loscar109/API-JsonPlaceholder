
//Definimos la URL de la cual vamos a extraer los datos
const API_URL = 'https://jsonplaceholder.typicode.com';

//Creamos un objeto XMLHttpRequest el cual sirve para realizar peticiones http y https
const xhr = new XMLHttpRequest();

//Creamos una función el cual maneja los "request"
    /*
    request permite el acceso a toda la información que pasa desde el navegador del cliente al servidor.
    El estado 200 indica que el assert es correcto
    /*/
function onRequestHandler(){
    if (this.readyState == 4 && this.status == 200){
        /*
            Existen cuatro tipo de estados:
                0: no se ha llamado al método OPEN
                1: se ha llamado al metodo OPEN
                2: se está llamado al método send()
                3: está cargando, es decir, se está recibiendo la respuesta
                4: se ha completado la operación
        
        */

        /*Se crea una constante denominada como data el cual almacenará:
            JSON. parse hace que una cadena de texto en formato JSON se vuelva un objeto JavaScript.
            En este caso se refiere a la cadena de texto de la respuesta o "response" que recibe        
        */
        const data = JSON.parse(this.response);

        /*Se crea una constante denominada HTMLResponse el cual almacenará la selección del DOM HTML 


        */
        const HTMLResponse = document.querySelector("#app");
        
        const datos = data.map((user) => `<li>${user.name}</li> <li>${user.username}</li>  <li>${user.email}</li>`);
        HTMLResponse.innerHTML = `<ul>${datos}</ul>`;  
         
        console.log(this.response);
    }

}

xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", `${API_URL}/users`);
xhr.send();