import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("Belum ada akun, silakan register");
      return;
    }

    if (
      email === storedUser.email &&
      password === storedUser.password
    ) {
      localStorage.setItem("isLogin", "true");
      navigate("/dashboard");
    } else {
      alert("Email atau password salah");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>

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

      <button onClick={handleLogin}>Login</button>

      <p onClick={() => navigate("/register")}>
        Belum punya akun? Register
      </p>
    </div>
  );
}
