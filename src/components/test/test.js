// { [showForm] === true ?
//   <TodoForm addTodo={addTodo} showForm={showForm}/>
//   :
//   <FormButton />
// }
// <FormButton />

// IMPERITIVE

// DECLARATIVE (react is described as this)
// const completeTodo = (todoId) => {
//   const newTodos = todos.map((todo, i) => {
//     if (todoId === i) {
//       todo.isCompleted = true;
//       return todo;
//     }
//   });
//   setTodos(newTodos);
// };

// example: if I had 100 todos, this would run through each one vs knowing splice is quicker
// const removeTodo = (todoId) => {
//   const newTodos = todos.filter((todo, i) => {
//     if (todoId !== i) {
//       return todo;
//     }
//   });
//   setTodos(newTodos);
// };

// <div className={showSmallButton ? "hidden" : ""}>
// </div>



// <div className={showSmallButton ? "hidden" : "big-btn"} onClick={() => handleSubtractButton()}><i class="fal fa-minus"></i></div>
// <div className={showSmallButton ? "big-btn" : "hidden"} onClick={() => handleAddButton()}><i class="fal fa-plus"></i></div>

// const handleAddButton = () => {
//   setShowSmallButton(false);
// };
//
// const handleSubtractButton = () => {
//   setValue("");
//   setShowSmallButton(true);
// };

// setShowSmallButton(true);

// const [showSmallButton, setShowSmallButton] = useState(false);
