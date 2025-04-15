import React from 'react';

const TaskList = ({tasks, onDeleteTask}) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
            {task.text}
            <button onClick={() => 
                {console.log("Eliminando tarea con ID:", task.id);
                onDeleteTask(task.id)}}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
