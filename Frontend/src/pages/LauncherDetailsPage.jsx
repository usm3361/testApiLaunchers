import { useEffect } from "react";
import "../App.css";
import { useNavigate, useParams } from "react-router";
import { useLauncherStore } from "../store/launcherStore.js";
import { useAuthStore } from "../store/authStore.js";

export default function LauncherDetailsPage() {
  const { id } = useParams();
  const nav = useNavigate();
  const { launchers, fetchLauncher, deleteLauncher, updateLauncher } =
    useLauncherStore();
  const { user } = useAuthStore();

  useEffect(() => {
    if (launchers.length === 0) {
      fetchLauncher();
    }
  }, []);

  const launcher = launchers.find((l) => l._id === id);
  if (!launcher) {
    return <div>Loading... / Launcher not found...</div>;
  }

  const handleDelete = async () => {
    await deleteLauncher(launcher._id);
    nav("/");
  };

  const handleDestroy = async () => {
    await updateLauncher(launcher._id, { ...launcher, destroyed: true });
    fetchLauncher();
  };
  const canDelete = user?.type === "admin" || user?.type === "intel";
  const canDestroy =
    user?.type === "admin" ||
    user?.type === "intel" ||
    user?.type === "airforce";

  return (
    <div id="launcher-details-page" className="launcher-card">
      <h2>Launcher Details</h2>
      <p>
        <strong>Name:</strong> {launcher.name}
      </p>
      <p>
        <strong>City:</strong> {launcher.city}
      </p>
      <p>
        <strong>Type:</strong> {launcher.rocketType}
      </p>
      <p>
        <strong>Coordinates:</strong> {launcher.latitude}, {launcher.longitude}
      </p>
      <p>
        <strong>Status:</strong> {launcher.destroyed ? "Destroyed" : "Active"}
      </p>

      <div className="launcher-action">
        {canDestroy && !launcher.destroyed && (
          <button onClick={handleDestroy}>Mark as Destroyed</button>
        )}

        {canDelete && (
          <button onClick={handleDelete} className="buttonDelete">
            Delete Launcher
          </button>
        )}
      </div>
    </div>
  );
}
