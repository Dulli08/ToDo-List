function TodoItem({ task, toggleCompleted, deleteTask }) {
  function changeHandler() {
    toggleCompleted(task.id);
  }

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={changeHandler}
      />
      <span>
        <p>{task.text}</p>{" "}
        <button onClick={() => deleteTask(task.id)}>X</button>
      </span>
    </div>
  );
}

export default TodoItem;
