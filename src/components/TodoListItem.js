import React from 'react';


// I like this component, nice and simple
// makes sense what ur passing in

// might want to move params onto separate lines
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
