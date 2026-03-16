import axios from "axios";

const api = "http://localhost:3000/api/launchers";

export const getLaunchers = () => axios.get(api);

export const getLauncherById = (id) => axios.get(`${api}/${id}`);

export const addLauncher = (dataLauncher) => axios.post(api, dataLauncher);

export const deleteLauncher = (id) => axios.delete(`${api}/${id}`);

export const updateLauncher = (id, data)=> axios.put(`${api}/${id}`, data);