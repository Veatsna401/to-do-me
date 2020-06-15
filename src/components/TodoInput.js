import React, {useState} from 'react';


// is hidden ever used?

// is there anyway we can move this state to the parent?
// i think inputs should be fairly dumb
// imagine if we had 10 input fields, with all their own state
// could lead to strange behavior

// or a parent component that holds all of the state

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

  // this add and subtract seem like toggle behavior
  // any way we can combine them into one toggleMethod?
  const handleAddButton = () => {
    setShowSmallButton(false);
  };

  const handleSubtractButton = () => {
    setShowSmallButton(true);
  };

  // Oh i see now this is a form
  // hmm in that case maybe no need to move to a parent component
  // but I would rename this to ToDoForm

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
