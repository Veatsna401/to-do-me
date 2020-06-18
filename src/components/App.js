import React, {useState} from 'react';
import TodoList from './TodoList';
import LogoButton from './LogoButton';
import './App.scss';

export const App = () => {
  const VIEWS = { 1:"addButtonView", 2: "todoListView" }
  const [view, setView] = useState(1);

  const handleClick = () => {
    setView(2);
  };

  return (
    <div className="app">
      { VIEWS[view] === "addButtonView" ?
        <LogoButton
          onClick={() => handleClick()}
        />
        :
        <TodoList />
      }
    </div>
  );
}

export default App;
