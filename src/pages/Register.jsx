import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!name || !email || !password) {
      alert("Semua field wajib diisi");
      return;
    }

    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Register berhasil, silakan login");
    navigate("/");
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>

      <input
        type="text"
        placeholder="Nama lengkap"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
