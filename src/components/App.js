import React, {useState} from 'react';
import TodoInput from './TodoInput';
import TodoListItem from './TodoListItem';
import './assets/font-awesome/all.js';
import './App.scss';

export const App = () => {
  const [todos, setTodos] = useState([]);

  //currently ur todos is this data strucutre
  // [{text: 'one'}, {text: 'two'}]

  // could we add an id to those todos
  // [{id: 1, text: 'one'}, {id: 2, text: 'two'}]

  const [hidden, setHidden] = useState(false);

  const handleClick = () => {
    setHidden(true);
  };

  //nice naming
  // instead of naming it text, what about newTodo
  const addTodo = (text) => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  };

  // instead of index, what about calling it `todoId`
  const completeTodo = (index) => {
    // this is nice but I think using map here would be more declarative
    // const newTodos = todos.map((todo, i) => {
    //   if (index === i) {
    //     todo.isCompleted = true;
    //     return todo;
    //   }
    // });

    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    // this is nice, but I think using filter method here would be more declarative
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  
  //May want to make create another layer called TodoList that holds all your
  // to do items.
  //  TodoList
  //     - TodoListItem #1
  //     - TodoListItem #2

  // instead of placing the code here
  // I think it would be cool if this App component only renders <ToDoListItem />
  // but up to you.
  return (
    <div className="app">

      {/*
        I feel like this is complex enough to make into another component
        What about calling it AddButton
      */}
      <div className={hidden ? "hidden" : "todo-logo"} onClick={() => handleClick()}>
        <div className="logo">TO</div>
        <div className="add-btn">+</div>
        <div className="logo">DO</div>
      </div>
      <div className={hidden ? "todo-list" : "hidden"}>
        {/* nice use of adding a key, but we shouldn't rely on using index

        https://reactjs.org/docs/lists-and-keys.html

        Check out the portion on why using ids as keys is bad
        however, i feel your data structure meets the requirement of being safe to use keys
        i think we should change ur data structure a bit of todos
        */}
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
