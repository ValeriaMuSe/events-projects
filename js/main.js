import { eventApi } from './modules/api.js';
// Ejemplo de uso de getEventsByCategory
eventApi.getEventsByCategory('sports')
  .then(eventsData => {
    console.log('Events:', eventsData);
  })
  .catch(error => {
    console.error(error);
  });
// Ejemplo de uso de getAllCategories
const categories = eventApi.getAllCategories();
categories.forEach(category => {
  console.log(category);
});


var container = document.createElement('div');
container.id = 'tab-container';
document.body.appendChild(container);

var eventscategories = ['Music', 'Sports', 'Business', 'Food', 'Art'];

eventscategories.forEach(function(category) {
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
