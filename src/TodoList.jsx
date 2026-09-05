import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
  const [todos, setTodos] = useState([
    {
      task: "Welcome to Todo App!",
      id: uuidv4(),
      isDone: false,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      deadline: ""
    },
    {
      task: "Learn React & Build Projects",
      id: uuidv4(),
      isDone: true,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      deadline: ""
    }
  ]);
  const [newTodo, setNewTodo] = useState("");
  const [deadlineDate, setDeadlineDate] = useState("");
  const [deadlineTime, setDeadlineTime] = useState("");
  const [error, setError] = useState("");

  const addNewTask = (e) => {
    if (e) e.preventDefault();
    if (!newTodo.trim()) {
      setError("Task description cannot be empty!");
      return;
    }

    const now = new Date();
    const formattedCreated = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    let formattedDeadline = "";
    let rawDeadlineVal = "";

    if (deadlineDate) {
      const timePart = deadlineTime || "23:59";
      rawDeadlineVal = `${deadlineDate}T${timePart}`;
      const deadlineObj = new Date(rawDeadlineVal);
      formattedDeadline = deadlineObj.toLocaleString([], { dateStyle: 'short', timeStyle: 'short' });
    }

    setTodos((prevTodos) => [
      ...prevTodos,
      {
        task: newTodo.trim(),
        id: uuidv4(),
        isDone: false,
        createdAt: formattedCreated,
        deadline: formattedDeadline,
        rawDeadline: rawDeadlineVal
      }
    ]);
    setNewTodo("");
    setDeadlineDate("");
    setDeadlineTime("");
    setError("");
  };

  const updateTodoValue = (event) => {
    setNewTodo(event.target.value);
    if (error && event.target.value.trim()) {
      setError("");
    }
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      })
    );
  };

  const checkIsOverdue = (todo) => {
    if (todo.isDone || !todo.rawDeadline) return false;
    return new Date(todo.rawDeadline) < new Date();
  };

  const completedCount = todos.filter((t) => t.isDone).length;

  return (
    <div className="todo-card">
      <h1 className="app-title">
        <span> MY Todolist</span>
      </h1>

      <form onSubmit={addNewTask} className="task-form">
        <div className="input-row">
          <div className="input-container">
            <input
              type="text"
              className={`task-input ${error ? "input-error" : ""}`}
              placeholder="Add a new task..."
              value={newTodo}
              onChange={updateTodoValue}
            />
          </div>
          <button type="submit" className="add-btn">
            <span>+</span> Add Task
          </button>
        </div>

        <div className="deadline-row">
          <div className="deadline-field">
            <span className="deadline-label"> Date:</span>
            <input
              type="date"
              className="deadline-input"
              value={deadlineDate}
              onChange={(e) => setDeadlineDate(e.target.value)}
            />
          </div>
          <div className="deadline-field">
            <span className="deadline-label"> Time:</span>
            <input
              type="time"
              className="deadline-input"
              value={deadlineTime}
              onChange={(e) => setDeadlineTime(e.target.value)}
            />
          </div>
        </div>
      </form>

      {error && (
        <div className="error-message">
          <span>⚠️</span> {error}
        </div>
      )}

      <div className="stats-bar">
        <span>Tasks Completed</span>
        <span className="badge">
          {completedCount} / {todos.length}
        </span>
      </div>

      {todos.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">📝</div>
          <p className="empty-text">No tasks yet! Add one above to get started.</p>
        </div>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => {
            const isOverdue = checkIsOverdue(todo);
            return (
              <li
                key={todo.id}
                className={`todo-item ${todo.isDone ? "completed" : ""}`}
              >
                <div
                  className="todo-content"
                  onClick={() => toggleDone(todo.id)}
                >
                  <div className="checkbox-custom">
                    {todo.isDone && <span className="checkmark">✓</span>}
                  </div>

                  <div className="task-details">
                    <span className="task-text">{todo.task}</span>
                    <div className="task-meta">
                      {todo.createdAt && (
                        <span className="time-badge">
                          📅 {todo.createdAt}
                        </span>
                      )}
                      {todo.deadline && !todo.isDone && (
                        <span className={`time-badge ${isOverdue ? "overdue" : "deadline"}`}>
                          {isOverdue ? "🚨 Overdue: " : "⏰ Due: "} {todo.deadline}
                        </span>
                      )}
                      {todo.isDone && (
                        <span className="time-badge completed-badge">
                          ✓ Completed
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <button
                  className="delete-btn"
                  onClick={() => deleteTodo(todo.id)}
                  title="Delete task"
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

