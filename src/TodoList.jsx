import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "To go to the doctor.",
      completed: true,
    },
    {
      id: 2,
      text: "To pray.",
      completed: false,
    },
  ]);

  const [text, setText] = useState("");

  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setText("");
  }

  function toggleCompleted(id) {
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, completed: !task.completed } : task;
      })
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="todo-item">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleCompleted={toggleCompleted}
          deleteTask={deleteTask}
        />
      ))}

      <input value={text} onChange={(e) => setText(e.target.value)} />

      <button disabled={!text} onClick={() => addTask(text)}>
        Add
      </button>
    </div>
  );
}

export default TodoList;
