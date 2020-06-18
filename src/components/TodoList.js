import React, {useState} from 'react';
import TodoListItem from './TodoListItem';
import TodoForm from './TodoForm';
import ComponentToggler from './ComponentToggler';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(1);

  const addTodo = (addedTodo) => {
    const newTodos = [...todos, {addedTodo, id}];
    setId(id + 1);
    setTodos(newTodos);
  };

  const completeTodo = (todoId) => {
    const newTodos = [...todos];
    todos[todoId].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (todoId) => {
    const newTodos = [...todos];
    newTodos.splice(todoId, 1);
    setTodos(newTodos);
  };

  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <TodoListItem
          key={todo.id}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <ComponentToggler>
        <TodoForm addTodo={addTodo} />
      </ComponentToggler>
    </div>
  );
}

export default TodoList;
