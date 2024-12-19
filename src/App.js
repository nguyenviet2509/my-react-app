import React, { useState } from "react";
import "./App.css";

function App() {
  // State lưu trữ danh sách công việc
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  // Hàm để thêm công việc vào danh sách
  const addTodo = () => {
    if (todo) {
      setTodos([...todos, todo]);
      setTodo(""); // Reset input field
    }
  };

  // Hàm để xóa công việc khỏi danh sách
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTodo}>Add Task</button>

      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
