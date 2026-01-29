import { useState } from "react";

export default function TodoForm({ setTodos }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Low");

  const submitHandler = () => {
    if (text === "") return;

    setTodos(prev => [
      ...prev,
      {
        id: Date.now(),
        text,
        priority,
        date: new Date().toLocaleDateString(),
      }
    ]);

    setText("");
  };

  return (
    <div className="form">
      <textarea
        placeholder="Tulis tugas..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <select onChange={(e) => setPriority(e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button onClick={submitHandler}>Submit</button>
    </div>
  );
}
