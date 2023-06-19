
import { eventApi, formatDate, formatPrice } from './api.js';

function renderEvents(eventsData) {
  var gridContainer = document.getElementById('grid-container');
  
  // Limpiar la cuadrícula de eventos existente
  if (gridContainer) {
    gridContainer.innerHTML = '';
  } else {
    gridContainer = document.createElement('div');
    gridContainer.id = 'grid-container';
    document.body.appendChild(gridContainer);
  }
  
  eventsData.forEach(event => {
    var eventElement = document.createElement('div');
    eventElement.classList.add('event');

    var imageElement = document.createElement('img');
    imageElement.src = event.image;
    imageElement.classList.add('event_image');
    eventElement.appendChild(imageElement);

    var titleElement = document.createElement('h2');
    titleElement.textContent = event.title;
    eventElement.appendChild(titleElement);

    var dateElement = document.createElement('p');
    dateElement.textContent = formatDate(event.date);
    eventElement.appendChild(dateElement);

<<<<<<< Updated upstream
=======
    // var locationElement = document.createElement('p');
    // locationElement.textContent = event.location;
    // eventElement.appendChild(locationElement);

>>>>>>> Stashed changes
    var priceElement = document.createElement('p');
    priceElement.textContent = formatPrice(event.price);
    eventElement.appendChild(priceElement);

    gridContainer.appendChild(eventElement);
  });
}

function handleClick(category) {
  eventApi.getEventsByCategory(category)
    .then(eventsData => {
      console.log('Events:', eventsData);
      renderEvents(eventsData);
    })
    .catch(error => {
      console.error(error);
    });
}

function initializeButtons() {
  var container = document.createElement('div');
  container.id = 'tab-container';
  document.body.appendChild(container);

  var eventscategories = ['Music', 'Sports', 'Business', 'Food', 'Art'];

  eventscategories.forEach(function(category) {
    var button = document.createElement('button');
    button.innerHTML = category;
    button.addEventListener('click', function() {
      console.log('Categoría seleccionada: ' + category);
      handleClick(category.toLowerCase()); // Convertir a minúsculas para que coincida con las categorías en el API
    });
    container.appendChild(button);
  });

  container.classList.add('flex-container');

  var buttons = container.getElementsByTagName('button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.add('tab-button');
  }
}

export { initializeButtons };
