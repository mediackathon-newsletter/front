import axios from 'axios';

export function storeUser(user) {
  return localStorage.setItem('user', JSON.stringify(user));
}

export function updateUser(user) {
  return localStorage.setItem('user', JSON.stringify(user));
}

export function getUser() {
  const user = JSON.parse(localStorage.getItem('user'));
  return user;
}
