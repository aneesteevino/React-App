import React, { useState } from 'react';

const Addtodo = ({ setTodo }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const addtodo = () => {
    if (!title.trim()) {
      setError('Todo cannot be empty! Please enter a valid todo.');
      return;
    }

    const todo = {
      id: Date.now(),
      title: title.trim(),
    };

    setTodo((value) => [...value, todo]);
    setTitle('');
    setError(''); // Clear error after successful addition
  };

  return (
    <div className='flex flex-col items-center mt-4'>
      <div className='h-[40px] w-[300px] bg-slate-600 rounded-lg flex justify-center items-center'>
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setError(''); // Clear error while typing
          }}
          type="text"
          placeholder="Add a new todo..."
          className="h-full bg-transparent text-white px-2 rounded-lg focus:outline-none"
          style={{ width: '85%' }}
        />
        <button
          onClick={addtodo}
          className='bg-black hover:bg-green-700 h-10 w-[50px] text-white font-bold flex justify-center items-center rounded-lg'
        >
          +
        </button>
      </div>
      {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
    </div>
  );
};

export default Addtodo;
