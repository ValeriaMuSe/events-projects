

function formatDate(date) {
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  };
  return new Date(date).toLocaleString('en-US', options);
}

const eventApiUrl = 'https://knassbani2.execute-api.us-east-2.amazonaws.com/events/';

class EventAPI {
  constructor() {
    this.categories = ['music', 'art', 'food', 'business', 'sports'];
  }

  async getEventsByCategory(category) {
    const url = `${eventApiUrl}${category}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  getAllCategories() {
    return this.categories;
  }
}

const eventApi = new EventAPI();

export { eventApi, formatDate };
