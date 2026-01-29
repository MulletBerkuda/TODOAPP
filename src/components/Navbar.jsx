import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoModal from "./TodoModal";

export default function Navbar({ setTodos }) {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("isLogin");
    navigate("/");
  };

  return (
    <>
      <nav className="navbar">
        <h3>TODOAPP</h3>

        <div className="nav-actions">
          <button onClick={() => setShowModal(true)}>Add</button>
       <button onClick={() => navigate("/profile")}>
  Profile
</button>

          <button onClick={logout}>Logout</button>
        </div>
      </nav>

      {showModal && (
        <TodoModal
          close={() => setShowModal(false)}
          setTodos={setTodos}
        />
      )}
    </>
  );
}
