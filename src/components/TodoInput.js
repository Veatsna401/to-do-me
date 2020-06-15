import React, {useState} from 'react';

const TodoInput = ({addTodo, hidden}) => {
  const [value, setValue] = useState("");
  const [showSmallButton, setShowSmallButton] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
    setShowSmallButton(true);
  };

  const handleAddButton = () => {
    setShowSmallButton(false);
  };

  const handleSubtractButton = () => {
    setShowSmallButton(true);
  };

  return (
    <div>
      <div className={showSmallButton ? "hidden" : ""}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </form>
        <div className="hint">
          Hit <strong>RETURN</strong> or <strong>ENTER</strong> to add item
        </div>
        <div className={showSmallButton ? "hidden" : "small-btn"} onClick={() => handleSubtractButton()}><i class="fal fa-minus"></i></div>
      </div>
      <div className={showSmallButton ? "small-btn" : "hidden"} onClick={() => handleAddButton()}><i class="fal fa-plus"></i></div>
    </div>
  );
}

export default TodoInput;
