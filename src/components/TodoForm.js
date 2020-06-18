import React, {useState} from 'react';

const TodoForm = ({addTodo, showForm}) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
      <div className="hint">Hit <strong>RETURN</strong> or <strong>ENTER</strong> to add item</div>
    </div>
  );
}

export default TodoForm;
