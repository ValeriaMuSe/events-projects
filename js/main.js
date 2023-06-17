// // Definir la URL de la API
// const apiUrl = 'https://knassbani2.execute-api.us-east-2.amazonaws.com/events/';

// // Crear un objeto proxy
// const apiProxy = new Proxy({}, {
//   get: function(target, property) {
//     // Manejar la llamada a una propiedad
//     const url = apiUrl + property;
//     return fetch(url).then(response => response.json());
//   }
// });

// // Utilizar el objeto proxy
// apiProxy.category
//   .then(data => {
//     console.log(data);
//   })


// const tabLinksContainer = document.getElementById('tab-links');

const url = 'https://knassbani2.execute-api.us-east-2.amazonaws.com/events/category';

fetch(url, {
  headers: {
    'Access-Control-Allow-Origin': 'http://127.0.0.1:5500' // Reemplaza con tu origen específico
  }
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });