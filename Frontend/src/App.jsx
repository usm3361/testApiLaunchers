import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import AddLauncherPage from "./pages/AddLauncherPage";
import LauncherDetailsPage from "./pages/LauncherDetailsPage";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddLauncherPage />} />
          <Route path="/launcher/:id" element={<LauncherDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
