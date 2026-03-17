import { useAuthStore } from "../store/authStore.js";
import { Link } from "react-router";

export default function Navbar() {
  const { user, logout } = useAuthStore();
  return (
    <nav className="navbar">
      <Link to="/users">Users</Link>
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
      <button
        onClick={() => alert(`User: ${user?.username}, Role:${user?.type}`)}
      >
        My Profile
      </button>
    </nav>
  );
}
