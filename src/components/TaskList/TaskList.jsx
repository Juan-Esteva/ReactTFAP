import React from 'react';
import './TaskList.css';

const TaskList = ({ tasks, onTaskComplete, onTaskDelete }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`task-item ${task.completed ? 'completed' : ''}`}>
          <span>{task.text}</span>
          <button onClick={() => onTaskComplete(task.id, !task.completed)}>
          <i class="bx bx-check "></i>
          </button>
          <button onClick={() => onTaskDelete(task.id)}><i class="bx bx-trash "></i></button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
