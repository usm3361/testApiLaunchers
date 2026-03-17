import { useNavigate } from "react-router";
import { useAuthStore } from "../store/authStore.js";
import { useState } from "react";

export default function LoginPage() {
  const login = useAuthStore((s) => s.login);
  const nav = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async () => {
    await login(form);
    nav("/");
  };
  return (
    <div className="form">
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button className="button-login" onClick={submit}>
        Login
      </button>
    </div>
  );
}
