import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) navigate("/");

  return (
    <div className="profile-card">
      <div className="avatar">
        {user.name[0]}
      </div>

      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>Frontend Developer</p>

      <button onClick={() => navigate("/dashboard")}>
        Back to Dashboard
      </button>
    </div>
  );
}
