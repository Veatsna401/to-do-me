import React, {useState} from 'react';

const TodoListItem = ({
    todo,
    index,
    updateTodo,
    completeTodo,
    removeTodo
  }) => {

  const [value, setValue] = useState(todo.addedTodo);
  const [disabled, setDisabled] = useState(true);

  const editTodo = (todoId) => {
    if (disabled) {
      setDisabled(false);
      return;
    }
    setDisabled(true);
    return;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTodo(value);
    setDisabled(true);
  };

  return (
    <div className="todo">
      <form onSubmit={handleSubmit}>
        <input
          id="myInput"
          disabled={disabled}
          style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <div className="btn-actions">
          <div className="small-btn" id="edit" onClick={() => editTodo()}><i className={disabled ? "fal fa-pencil" : "fal fa-save"}></i></div>
          <div className="small-btn" onClick={() => completeTodo(index)}><i className={todo.isCompleted ? "fal fa-undo" : "fal fa-check"}></i></div>
          <div className="small-btn" onClick={() => removeTodo(index)}><i className="fal fa-times"></i></div>
        </div>
      </form>
    </div>
  );
}

export default TodoListItem;
