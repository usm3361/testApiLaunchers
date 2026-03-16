import { useEffect, useState } from "react";
import { useLauncherStore } from "../store/launcherStore";
import LancherCard from "../components/LancherCard";

export default function HomePage() {
  const { launchers, fetchLaunchers } = useLauncherStore();
  const [citySearch, setCitySearch] = useState("");
  const [rocketTypeFilter, setRocketTypeFilter] = useState("");

  useEffect(() => {
    fetchLaunchers();
  }, []);

  const filtered = launchers.filter((l) => {
    return (
      l.city.toLowerCase().includes(citySearch.toLowerCase()) &&
      (rocketTypeFilter === "" || l.rocketType === rocketTypeFilter)
    );
  });

  return (
    <div id="home-Page">
      <h1 id="titlePage">LAUNCHERS LIST</h1>

      <div id="filtersContainer">
        <input
          id="city-search-input"
          className="filter-input"
          placeholder="Search city"
          onChange={(e) => setCitySearch(e.target.value)}
        />

        <select id="rocket-filter" className="filter-select">
          <option value="">All</option>
          <option>Shahab3</option>
          <option>Fetah110</option>
          <option>Radwan</option>
          <option>Kheibar</option>
        </select>
        <Link id="add-launcher-button" to="/add">
          add Launcher
        </Link>
      </div>
      <div id="launchers-list">
        {filtered.map((l) => (
          <LancherCard key={l._id} launcher={l} />
        ))}
      </div>
    </div>
  );
}
