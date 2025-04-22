import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDeleteTask, onToggleComplete, onToggleEditTask, onEditTask }) => {
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onToggleComplete={onToggleComplete}
          onToggleEditTask={onToggleEditTask}
          onEditTask={onEditTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;

