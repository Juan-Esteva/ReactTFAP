// TaskForm.jsx

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './TaskForm.css';

const TaskForm = ({ onTaskAdd }) => {
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const task = { id: uuidv4(), text: newTask, completed: false };
      onTaskAdd(task);
      setNewTask('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="task-form">
      <input
        type="text"
        placeholder="New task"
        value={newTask}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown} // Agregar manejo de tecla Enter
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default TaskForm;
