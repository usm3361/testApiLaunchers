import { create } from "zustand";
import * as api from "../api/launchersApi";

export const useLauncherStore = create((set) => ({
  launchers: [],
  fetchLauncher: async () => {
    const res = await api.getLaunchers();
    set({ launchers: res.data });
  },
  addLauncher: async (launcher) => {
    await api.addLauncher(launcher);
  },
  deleteLauncher: async (id) => {
    await api.deleteLauncher(id);
  },
  updateLauncher: async (id, data) => {
    await api.updateLauncher(id, data);
  },
}));
