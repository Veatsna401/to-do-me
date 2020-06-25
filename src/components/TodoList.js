import React, {useState} from 'react';
import TodoListItem from './TodoListItem';
import TodoForm from './TodoForm';
import StatusTracker from './StatusTracker';
import ComponentToggler from './ComponentToggler';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(1);
  const [count, setCount] = useState(0);
  const [taskDone, setTaskDone] = useState(0);

  const addTodo = (addedTodo) => {
    const newTodos = [...todos, {addedTodo, id}];
    setId(id + 1);
    setTodos(newTodos);
  };

  const updateTodo = (updatedTodo) => {
    const newTodos = [...todos];
    setTodos(newTodos);
  };

  const completeTodo = (todoId) => {
    const newTodos = [...todos];
    if (todos[todoId].isCompleted) {
      todos[todoId].isCompleted = false;
      setTaskDone(taskDone - 1)
    } else {
      todos[todoId].isCompleted = true;
      setTaskDone(taskDone + 1)
    }
    setTodos(newTodos);
  };

  const removeTodo = (todoId) => {
    const newTodos = [...todos];
    newTodos.splice(todoId, 1);
    if (todos[todoId].isCompleted === true) {
      setTaskDone(taskDone - 1);
    }
    setCount(count - 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <StatusTracker
        count={count}
        taskDone={taskDone}
      />
      <div className="todo-list">
        {todos.map((todo, index) => (
          <TodoListItem
            key={todo.id}
            index={index}
            todo={todo}
            updateTodo={updateTodo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <ComponentToggler>
          <TodoForm addTodo={addTodo} count={count} setCount={setCount}/>
        </ComponentToggler>
      </div>
    </div>
  );
}

export default TodoList;
