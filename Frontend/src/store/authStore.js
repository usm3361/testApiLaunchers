import { create } from "zustand";
import * as api from "../api/authApi.js";

const getInitialUser = () => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (error) {
      return null;
    }
  }
  return null;
};

export const useAuthStore = create((set) => ({
  user: getInitialUser(),

  login: async (data) => {
    try {
      const res = await api.login(data);
      const token = res?.data?.token || res?.token;

      if (token) {
        localStorage.setItem("token", token);
        const payload = JSON.parse(atob(token.split(".")[1]));
        set({ user: payload });
      } else {
        console.error(
          "Login succeeded but no token was found in the response.",
          res,
        );
      }
    } catch (error) {
      console.error(
        "Login failed! Error:",
        error.response?.data?.msg || error.message,
      );
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ user: null });
  },
}));
