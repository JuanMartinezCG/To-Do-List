import React from 'react';
import TaskItem from './TaskItem'; // Importamos el componente TaskItem para usarlo aquí

const TaskList = ({tasks,
  onDeleteTask,
  onToggleComplete,
  onToggleEditTask,
  onEditTask,
  editingText,
  setEditingText
}) => {
  return (
    <ul id="task-list" className="task-list">
      {/* Recorremos todas las tareas y para cada una renderizamos un TaskItem */}
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onToggleComplete={onToggleComplete}
          onToggleEditTask={onToggleEditTask}
          onEditTask={onEditTask}
          editingText={editingText}
          setEditingText={setEditingText}
        />
      ))}
    </ul>
  );
};

export default TaskList;
