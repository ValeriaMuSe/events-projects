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

const eventApiProxy = new Proxy(eventApi, {
  get(target, property) {
    if (property === 'getEventsByCategory') {
      return target.getEventsByCategory;
    }
    return target[property];
  },
});
export { eventApi };