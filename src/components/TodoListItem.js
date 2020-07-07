import React, {useState} from 'react';

const TodoListItem = ({
    todo,
    index,
    updateTodo,
    editTodo,
    disabled,
    setDisabled,
    completeTodo,
    removeTodo
  }) => {

  const [value, setValue] = useState(todo.addedTodo);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTodo(value);
    setDisabled(true);
  };

  // Think about setting this section uop where it starts as a DIV, then swaps into a form. That firm should have state to hold its value. And should sweitch back to a div...once you save/update.

  return (
    <div className={ todo.isCompleted ? "todo-done" : "todo" }>
      <form onSubmit={handleSubmit}>
        <input
          disabled={disabled}
          style={{ textDecoration: todo.isCompleted ? "line-through" : "" , color: todo.isCompleted ? "rgba(255, 255, 255, 0.15)" : "" }}
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        { disabled ?
          <div className="btn-actions">
            <div className="small-btn" onClick={() => removeTodo(index)}><i className="fal fa-trash"></i></div>
            <div className="small-btn" onClick={() => editTodo()}><i className="fal fa-pencil"></i></div>
            <div className="small-btn" onClick={() => completeTodo(index)}><i className={todo.isCompleted ? "fal fa-undo" : "fal fa-check"}></i></div>
          </div>
          :
          <div className="btn-actions">
            <div className="small-edit-btn" onClick={() => editTodo()}>SAVE CHANGE</div>
          </div>
        }
      </form>
    </div>
  );
}

export default TodoListItem;
