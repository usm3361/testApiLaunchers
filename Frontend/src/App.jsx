import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import AddLauncherPage from "./pages/AddLauncherPage";
import LauncherDetailsPage from "./pages/LauncherDetailsPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/users"
            element={
              <ProtectedRoute>
                <UsersPage />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddLauncherPage />} />
          <Route path="/launcher/:id" element={<LauncherDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
