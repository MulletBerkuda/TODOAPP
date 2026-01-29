export default function TodoList({ todos, setTodos, done, setDone }) {
  const finishTodo = (todo) => {
    setTodos(todos.filter(t => t.id !== todo.id));
    setDone([...done, todo]);
  };

  return (
    <div>
      <h3>To Do</h3>
      {todos.map(todo => (
        <div key={todo.id} className="todo">
          <input type="checkbox" onChange={() => finishTodo(todo)} />
          <span>{todo.text}</span>
          <small>{todo.priority} | {todo.date}</small>

          <button onClick={() =>
            setTodos(todos.filter(t => t.id !== todo.id))
          }>
            ❌
          </button>
        </div>
      ))}
    </div>
  );
}
