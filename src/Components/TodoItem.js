import React from 'react';

function TodoItem({ todo, deleteTodo }) {
  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className="todo-item">
      <h3>{todo}</h3>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default TodoItem;
