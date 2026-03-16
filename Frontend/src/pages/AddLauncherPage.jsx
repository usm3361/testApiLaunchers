import { useNavigate } from "react-router";
import { useLauncherStore } from "../store/launcherStore";
import { useState } from "react";
import { addLauncher } from "../api/launchersApi";

export default function AddLauncherPage() {
  const navigate = useNavigate();
  const { AddLauncher } = useLauncherStore();
  const [form, setForm] = useState({
    name: "",
    rocketType: "",
    latitude: "",
    longitude: "",
    city: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addLauncher(form);
    navigate("/");
  };

  return (
    <div id="add-launcher-page">
      <h1 id="add-launcher-title">Add Launcher</h1>
      <form id="add-launcher-form" onSubmit={handleSubmit}>
        <input
          id="launcher-name"
          className="form-input"
          placeholder="Name"
          onChange={(e) => setForm(...form, e.target.value)}
        />
        <select
          id="rocket-type-select"
          className="form-select"
          onChange={(e) => setForm({ ...form, rocketType: e.target.value })}
        >
          <option>Shahab3</option>
          <option>Fetah110</option>
          <option>Radwan</option>
          <option>Kheibar</option>
        </select>
        <input
          id="latitude-input"
          className="form-input"
          placeholder="Latitude"
          onChange={(e) => setForm({ ...form, latitude: e.target.value })}
        />
        <input
          id="longitude-input"
          className="form-input"
          placeholder="Longitude"
          onChange={(e) => setForm({ ...form, longitude: e.target.value })}
        />
        <input
          id="city-input"
          className="form-input"
          placeholder="City"
          onChange={(e) => setForm({ ...form, city: e.target.value })}
        />
        <button id="submit-launcher-button" className="submit-button">
          Add Launcher
        </button>
      </form>
    </div>
  );
}
