import React, {useState} from 'react';
import TodoInput from './TodoInput';
import TodoListItem from './TodoListItem';
import './assets/font-awesome/all.js';
import './App.scss';

// test

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [hidden, setHidden] = useState(false);

  const handleClick = () => {
    setHidden(true);
  };

  const addTodo = (text) => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className={hidden ? "hidden" : "todo-logo"} onClick={() => handleClick()}>
        <div className="logo">TO</div>
        <div className="add-btn">+</div>
        <div className="logo">DO</div>
      </div>
      <div className={hidden ? "todo-list" : "hidden"}>
        {todos.map((todo, index) => (
          <TodoListItem
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoInput addTodo={addTodo} hidden={hidden}/>
      </div>
    </div>
  );
}

export default App;
