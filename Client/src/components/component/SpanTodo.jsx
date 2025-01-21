import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Delete, Edit, Save } from 'lucide-react';

const Todospan = ({ todos, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todos.title);

  const handleSave = () => {
    if (newTitle.trim()) {
      updateTodo(todos.id, newTitle.trim());
      setIsEditing(false);
    }
  };

  return (
    <span className="border-0 border-white bg-blue-400 bg-opacity-10 h-12 w-full flex flex-row items-center justify-between my-1 rounded-md">
      {isEditing ? (
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          type="text"
          placeholder="Edit todo..."
          className="h-full bg-transparent text-white px-2 rounded-lg focus:outline-none"
        />
      ) : (
        <p className="ml-2 text-white">{todos.title}</p>
      )}
      <div className="flex gap-2">
        {isEditing ? (
          <Button className="hover:bg-green-700" onClick={handleSave}>
            <Save />
          </Button>
        ) : (
          <Button
            className= " hover:bg-green-700"
            onClick={() => setIsEditing(true)}
          >
            <Edit />
          </Button>
        )}
        <Button
          className="hover:bg-red-600 "
          onClick={() => deleteTodo(todos.id)}
        >
          <Delete />
        </Button>
      </div>
    </span>
  );
};

export default Todospan;
