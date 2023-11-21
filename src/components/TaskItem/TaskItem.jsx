import React, { useState } from 'react';
import './TaskItem.css';

const TaskItem = ({ task, onTaskComplete, onTaskDelete }) => {
  const [completed, setCompleted] = useState(task.completed);

  const handleComplete = () => {
    setCompleted(!completed);
    onTaskComplete(task.id, !completed);
  };

  const handleDelete = () => {
    onTaskDelete(task.id);
  };

  return (
    <li className={`task-item ${completed ? 'completed' : ''}`}>
      <span>{task.text}</span>
      <button onClick={handleComplete}>Complete</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;
