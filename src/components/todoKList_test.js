import React, {useState} from 'react';
import TodoListItem from './TodoListItem';
import TodoForm from './TodoForm';
import StatusTracker from './StatusTracker';
import ComponentToggler from './ComponentToggler';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [disabled, setDisabled] = useState(true);

  const addTodo = (addedTodo) => {
    const newTodos = [...todos, {addedTodo, id:Math.floor(Math.random() * 10)}];
    setTodos(newTodos);
  };

  const updateTodo = (updatedTodo) => {
    const newTodos = [...todos];
    setTodos(newTodos);
  };

  const editTodo = (todoId) => {
    if (disabled) {
      setDisabled(false);
      return;
    }
    setDisabled(true);
  };

  const completeTodo = (todoId) => {
    const newTodos = [...todos];
    todos[todoId].isCompleted = !todos[todoId].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (todoId) => {
    const newTodos = [...todos];
    newTodos.splice(todoId, 1);
    setTodos(newTodos);
  };

  const getCompletedTasks = () => {
    return todos.filter((todo) => todo.isCompleted);
  };

  const showForm = (id) => {
    return true;
  };

  return (
    <div>
      <StatusTracker
        amount={todos.length}
        taskDone={getCompletedTasks().length}
      />
      <div className="todo-list">
        {todos.map((todo, index) => (
          { showForm(id) ?
            <TodoForm
              addTodo={addTodo}
              currentTodo={current}
            />
            :
            <TodoListItem
              key={todo.id}
              index={index}
              todo={todo}
              disabled={disabled}
              setDisabled={setDisabled}
              updateTodo={updateTodo}
              editTodo={editTodo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          }
        ))}
        <ComponentToggler>
          <TodoForm
            addTodo={addTodo}
            currentTodo={{text: "todo1"}}
          />
        </ComponentToggler>
      </div>
    </div>
  );
}

export default TodoList;
