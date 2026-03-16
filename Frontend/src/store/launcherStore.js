import { create } from "zustand";
import * as api from "../api/launchersApi";

export const useLauncherStore = create((set) => ({
  launcher: [],
  fetchLauncher: async () => {
    const res = await api.getLaunchers();
    set({ launcher: res.data });
  },
  addLauncher: async (launcher) => {
    await api.addLauncher(launcher);
  },
  deleteLauncher: async (id) => {
    await api.deleteLauncher(id);
  },
}));
