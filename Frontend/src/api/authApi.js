import axios from "axios";

const api = "http://localhost:3000/api/auth";


export const login = (data) => axios.post(`${api}/login`, data);

export const register = (data, token) =>
  axios.post(`${api}/register/create`, data, {
    headers: { Authorization: token },
  });

export const updateUser = (id, data, token) =>
  axios.put(`${api}/register/update/${id}`, data, {
    headers: { Authorization: token },
  });

export const deleteUser = (id, token) =>
  axios.delete(`${api}/register/delete/${id}`, {
    headers: { Authorization: token },
  });

export const getUser = (token) =>
  axios.get(`${api}/getUser`, { headers: { Authorization: token } });

export const getAllUsers = (token) =>
  axios.get(`${api}/users`, { headers: { Authorization: token } });
