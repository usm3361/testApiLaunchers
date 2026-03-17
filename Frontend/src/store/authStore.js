import { create } from "zustand";
import * as api from "../api/authApi.js";

export const useAuthStore = create((set) => ({
  user: null,

  login: async (data) => {
    const res = await api.login(data);
    localStorage.setItem("token", res.token);
    const payload = JSON.parse(atob(res.token.split(".")[1]));
    set({ user: payload });
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ user: null });
  },
}));
