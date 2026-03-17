import { useAuthStore } from "../store/authStore.js";
import { Link, useNavigate } from "react-router";

export default function Navbar() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const showUserInfo = () => {
    if (user) {
      alert(`Username: ${user.username}\nType: ${user.type}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="navbar">
      <h2>LauncherApp</h2>

      {user && <Link to="/">Home Page</Link>}

      {user?.type === "admin" && (
        <>
          <Link to="/register">Create a new user</Link>
          <Link to="/users">User management</Link>
        </>
      )}

      {user ? (
        <>
          <button onClick={showUserInfo}>My Profile</button>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}
