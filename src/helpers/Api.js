import axios from 'axios';

const API_URL = 'http://localhost:4000';

export function fetchSubscriptions(user) {
  return axios.get(
    `${API_URL}/subscriptions?userId=${user.id}&_expand=city&_expand=district`
  );
}

export function fetchNewsletter(id) {
  return axios.get(`${API_URL}/newsletters/${id}`);
}

export function fetchNewsletters(city, district) {
  return axios.get(
    `${API_URL}/newsletters?cityId=${city.id}&districtId=${district.id}`
  );
}
