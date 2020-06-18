import React from 'react';

const TodoListItem = ({
    todo,
    index,
    completeTodo,
    removeTodo
  }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.addedTodo}
      <div className="btn-actions">
        <div className="small-btn" onClick={() => completeTodo(index)}><i class="fal fa-check"></i></div>
        <div className="small-btn" onClick={() => removeTodo(index)}><i class="fal fa-times"></i></div>
      </div>
    </div>
  );
}

export default TodoListItem;
