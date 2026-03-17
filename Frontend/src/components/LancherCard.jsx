import { Link } from "react-router";
import { useLauncherStore } from "../store/launcherStore";
import '../App.css'

export default function LancherCard({ launcher }) {
  const { deleteLauncher } = useLauncherStore();

  return (
    <div className="launcher-card">
      <h3 className="launcher-name">Name: {launcher.name}</h3>
      <p className="launcher-city">City: {launcher.city}</p>
      <p className="launcher-type">Rocket: {launcher.rocketType}</p>
      <div className="launcher-action">
        <Link className="details-button" to={`/launcher/${launcher._id}`}>
          Details
        </Link>
        <button
          className="buttonDelete"
          onClick={() => deleteLauncher(launcher._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
