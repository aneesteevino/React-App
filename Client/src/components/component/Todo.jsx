import React, { useState } from 'react';
import Addtodo from './Addtodo';
import Viewtodo from './Viewtodo';

const Todo = () => {
  const [todo, setTodo] = useState([]);

  const deleteTodo = (id) => {
    const newTodo = todo.filter((todos) => todos.id !== id); 
    setTodo(newTodo);
  };

  const updateTodo = (id, title) => {
    const updatedTodo = todo.map((value) =>
      value.id === id ? { id, title } : value
    );
    setTodo(updatedTodo);
  };

  return (
    <>
      <div className="text-5xl h-16 rounded-lg font-extralight border-blue-50 flex justify-center items-center">
        <h1 className='text-white'>TodoApp</h1>
      </div>
      <div>
        <Addtodo setTodo={setTodo} />
        <Viewtodo todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      </div>
    </>
  );
};

export default Todo;
