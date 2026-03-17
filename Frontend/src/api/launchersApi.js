import axios from "axios";

const api = "http://localhost:3000/api/launchers";

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return { headers: { Authorization: `Bearer ${token}` } };
};

export const getLaunchers = () => axios.get(api, getAuthHeaders());

export const getLauncherById = (id) =>
  axios.get(`${api}/${id}`, getAuthHeaders());

export const addLauncher = (dataLauncher) =>
  axios.post(api, dataLauncher, getAuthHeaders());

export const deleteLauncher = (id) =>
  axios.delete(`${api}/${id}`, getAuthHeaders());

export const updateLauncher = (id, data) =>
  axios.put(`${api}/${id}`, data, getAuthHeaders());
