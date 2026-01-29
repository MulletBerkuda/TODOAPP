import { useState } from "react";

export default function TodoModal({ close, setTodos }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Low");

  const submitHandler = () => {
    if (!text) return;

    setTodos(prev => [
      ...prev,
      {
        id: Date.now(),
        text,
        priority,
        date: new Date().toLocaleDateString(),
      }
    ]);

    close();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <h3>Add New Task</h3>

        <textarea
          placeholder="What needs to be done?"
          onChange={(e) => setText(e.target.value)}
        />

        <select onChange={(e) => setPriority(e.target.value)}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <div className="modal-actions">
          <button onClick={close}>Cancel</button>
          <button onClick={submitHandler}>Add</button>
        </div>
      </div>
    </div>
  );
}
