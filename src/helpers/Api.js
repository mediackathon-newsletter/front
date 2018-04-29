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

export function createSubscription(user, city) {
  return axios.post(`${API_URL}/subscriptions`, {
    userId: user.id,
    cityId: city.id
  });
}

export function deleteSubscription(id) {
  return axios.delete(`${API_URL}/subscriptions/${id}`);
}

export function fetchUser(id) {
  return axios.get(`${API_URL}/users/${id}`);
}

export function fetchNewsletter(id) {
  return axios.get(`${API_URL}/newsletters/${id}?_embed=articles`);
}

export function fetchArticles(id) {
  return axios.get(`${API_URL}/newsletter/${id}/articles?_expand=user`);
}

export function fetchCities() {
  return axios.get(`${API_URL}/cities`);
}

export function fetchNewsletters(city, district) {
  return axios.get(`${API_URL}/newsletters?cityId=${city.id}`);
}

export function updateUser(user) {
  return axios.put(`${API_URL}/users/${user.id}`, user);
}
