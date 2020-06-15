import React from 'react';

const TodoListItem = ({todo, index, completeTodo, removeTodo}) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div className="btn-actions">
        <button onClick={() => completeTodo(index)}><i class="fal fa-check"></i></button>
        <button onClick={() => removeTodo(index)}><i class="fal fa-times"></i></button>
      </div>
    </div>
  );
}

export default TodoListItem;
