import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getLauncherById } from "../api/launchersApi";
import '../App.css'

export default function LauncherDetailsPage() {
  const { id } = useParams();
  const [launcher, setLauncher] = useState(null);

  useEffect(() => {
    getLauncherById(id).then((res) => setLauncher(res.data));
  }, []);
  if (!launcher) return <p id="loading-text">Loading...</p>;
  return (
    <div id="launcher-etails-page">
      <h1 id="launcher-details-title">{launcher.name}</h1>
      <div id="details-card">
        <p className="details-field">City: {launcher.city}</p>
        <p className="details-field">Rocket Type: {launcher.rocketType}</p>
        <p className="details-field">Latitude: {launcher.latitude}</p>
        <p className="details-field">Longitude: {launcher.longitude}</p>
      </div>
    </div>
  );
}
