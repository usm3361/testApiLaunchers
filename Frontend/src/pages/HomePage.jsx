import { useEffect, useState } from "react";
import { useLauncherStore } from "../store/launcherStore";
import LancherCard from "../components/LancherCard";
import { Link } from "react-router";
import "../App.css";

export default function HomePage() {
  const { launchers, fetchLauncher } = useLauncherStore();
  const [citySearch, setCitySearch] = useState("");
  const [rocketTypeFilter, setRocketTypeFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    fetchLauncher();
  }, []);

  const filtered = launchers?.filter((l) => {
    const matchCity = l.city.toLowerCase().includes(citySearch.toLowerCase());
    const matchRocket =
      rocketTypeFilter === "" || l.rocketType === rocketTypeFilter;

    let matchStatus = true;
    if (statusFilter === "destroyed") matchStatus = l.destroyed === true;
    if (statusFilter === "active") matchStatus = !l.destroyed;

    return matchCity && matchRocket && matchStatus;
  });

  return (
    <div id="home-Page">
      <h1 id="titleHomePage">LAUNCHERS LIST</h1>

      <div id="filtersContainer">
        <input
          id="city-search-input"
          className="filter-input"
          placeholder="Search city"
          onChange={(e) => setCitySearch(e.target.value)}
        />

        <select
          id="rocket-filter"
          className="filter-select"
          onChange={(e) => setRocketTypeFilter(e.target.value)}
        >
          <option value="">All Rockets</option>
          <option>Shahab3</option>
          <option>Fetah110</option>
          <option>Radwan</option>
          <option>Kheibar</option>
        </select>

        <select
          className="filter-select"
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Statuses</option>
          <option value="active">Active</option>
          <option value="destroyed">Destroyed</option>
        </select>
        <Link id="add-launcher-button" to="/add">
          Add Launcher
        </Link>
      </div>
      <div id="launchers-list">
        {filtered?.map((l) => (
          <LancherCard key={l._id} launcher={l} />
        ))}
      </div>
    </div>
  );
}
