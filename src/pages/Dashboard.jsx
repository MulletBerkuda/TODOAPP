import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import TodoList from "../components/TodoList";
import DoneList from "../components/DoneList";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    if (!isLogin || !user) {
      navigate("/");
    }
  }, []);

  const todoKey = `todos_${user?.email}`;
  const doneKey = `done_${user?.email}`;

  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem(todoKey)) || [];
  });

  const [done, setDone] = useState(() => {
    return JSON.parse(localStorage.getItem(doneKey)) || [];
  });

  useEffect(() => {
    localStorage.setItem(todoKey, JSON.stringify(todos));
    localStorage.setItem(doneKey, JSON.stringify(done));
  }, [todos, done]);

  return (
    <>
      <Navbar setTodos={setTodos} />

      <div className="container">
        <TodoList
          todos={todos}
          setTodos={setTodos}
          done={done}
          setDone={setDone}
        />

        <DoneList done={done} />
      </div>
    </>
  );
}
