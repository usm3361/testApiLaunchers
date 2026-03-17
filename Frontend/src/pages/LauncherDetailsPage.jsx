import { useEffect } from "react";
import "../App.css";
import { useAuthStore } from "../store/authStore.js";
import { useLauncherStore } from "../store/launcherStore.js";

export default function LauncherDetailsPage() {
  const { launchers, fetchLauncher, deleteLauncher } = useLauncherStore();
  const { user } = useAuthStore();

  useEffect(() => {
    fetchLauncher();
  }, []);

  const filtered = launchers.filter((l) => {
    if (user?.type === "admin") return true;
    if (user?.type === "intel") return l.status !== "destroyed";
    return l.status === "active";
  });
  return (
    <div id="launcher-etails-page">
      <h2>Launchers</h2>
      {filtered.map((l) => (
        <div key={l._id}>
          {l.name} - {l.status}
          {user?.type === "admin" && (
            <button onClick={() => deleteLauncher(l._id)}>Delete</button>
          )}
        </div>
      ))}
    </div>
  );
}
