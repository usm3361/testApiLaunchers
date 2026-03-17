import { useState } from "react";
import * as api from "../api/authApi";

export default function RegisterPage() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    user_type: "",
  });

  const submit = async () => {
    await api.register(form);
    alert("created");
  };
  return (
    <div className="form">
      <input
        placeholder="username"
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <input
        placeholder="email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        placeholder="password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <select
        onChange={(e) => setForm({ ...form, user_type: e.target.value })}
      >
        <option value="airforce">airforce</option>
        <option value="intel">intel</option>
        <option value="admin">admin</option>
      </select>
      <button className="button-register" onClick={submit}>Register</button>
    </div>
  );
}
