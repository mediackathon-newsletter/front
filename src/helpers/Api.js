import axios from 'axios';

const API_URL = 'http://localhost:4000';

export function fetchSubscriptions(user) {
  return axios.get(`${API_URL}/subscriptions?userId=${user.id}&_expand=city`);
}

export function createArticle(article) {
  return axios.post(`${API_URL}/articles`, {
    newsletterId: article.newletterId,
    categoryId: article.categoryId,
    userId: article.userId,
    title: article.title,
    subtitle: article.subtitle,
    text: article.text
  });
}

export function fetchArticles(newsletter) {
  return axios.get(
    `${API_URL}/newsletters/${
      newsletter.id
    }/articles?_expand=category&_expand=district`
  );
}

export function createSubscription(user, city) {
  return axios.post(`${API_URL}/subscriptions`, {
    userId: user.id,
    cityId: city.id
  });
}

export function deleteSubscription(subscription_id, user_id) {
  console.log(subscription_id, user_id);
  return axios.delete(
    `${API_URL}/subscriptions/${subscription_id}?user=${user_id}`
  );
}

export function fetchUser(id) {
  return axios.get(`${API_URL}/users/${id}`);
}

export function fetchWeather(city) {
  return axios.get(`api.openweathermap.org/data/2.5/weather?q=${city},fr`);
}

export function fetchNewsletter(id) {
  return axios.get(
    `${API_URL}/newsletters/${id}?_embed=articles&_expand=user&_expand=city`
  );
}

export function fetchCities() {
  return axios.get(`${API_URL}/cities`);
}

export function fetchNewsletters(city, district) {
  return axios.get(`${API_URL}/newsletters?cityId=${city.id}`);
}

export function createUser(user) {
  return axios.post(`${API_URL}/users`, {
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    password: user.password
  });
}

export function updateUser(user) {
  return axios.put(`${API_URL}/users/${user.id}`, user);
}
