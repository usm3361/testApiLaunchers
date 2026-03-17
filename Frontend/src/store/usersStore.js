import { create } from "zustand";
import * as api from "../api/authApi.js";

export const useUsersStore = create((set) => ({
  token: localStorage.getItem("token"),
  users: [],

  fetchUsers: async () => {
    const res = await api.getAllUsers(localStorage.getItem("token"));
    set({ users: res.data });
  },
  deleteUser: async (id) => {
    await api.deleteUser(id, localStorage.getItem("token"));
    set((state) => ({ users: state.users.filter((u) => u._id !== id) }));
  },
  updateUser: async (user) => {
    const res = await api.updateUser(user._id, localStorage.getItem("token"));
    set((state) => ({
      users: state.users.map((u) => (u._id === user._id ? res.data : u)),
    }));
  },
}));
