import React from 'react';
import Todospan from './Spantodo';

const Viewtodo = ({ todo, deleteTodo, updateTodo }) => {
  return (
    <>
      <div className="h-[300px] w-[300px] mt-5 overflow-scroll rounded-lg bg-blue-400 bg-opacity-10">
        <div>
          <h1 className="text-xl text-white">All Todos</h1>
        </div>
        {todo.map((todoItem) => (
          <div key={todoItem.id}>
            <Todospan
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
              todos={todoItem}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Viewtodo;
