import React, {useState} from 'react';

const TodoForm = ({
  addTodo,
  currentTodo
  }) => {
  const [todo, setTodo] = useState(currentTodo);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.text) return;
    addTodo(todo);
  };

  const handleChange = (value) => {
    setTodo({...todo, text: value});
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          type="text"
          className="input"
          value={todo.text}
          onChange={e => handleChange(e.target.value)}
        />
      </form>
      <div className="hint">Hit <strong>RETURN</strong> or <strong>ENTER</strong> to add item</div>
    </div>
  );
}

export default TodoForm;
