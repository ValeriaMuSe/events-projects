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






var container = document.createElement('div');
container.id = 'tab-container';
document.body.appendChild(container);

var categories = ['Music', 'Sports', 'Business', 'Food', 'Art'];

categories.forEach(function(category) {
  var button = document.createElement('button');
  button.innerHTML = category;
  button.addEventListener('click', function() {
    console.log('Categoría seleccionada: ' + category);
  });
  container.appendChild(button);
});

container.classList.add('flex-container');
container.style.marginTop = '20px';

var buttons = container.getElementsByTagName('button');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].classList.add('tab-button');
}
