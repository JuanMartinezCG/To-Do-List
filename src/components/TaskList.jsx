import React, { useState } from 'react';

const TaskList = ({tasks, onDeleteTask, onToggleComplete, onToggleEditTask, onEditTask}) => {
  const [editingText, setEditingText] = useState("");
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id} className={task.completed ? 'completed' : ''}>
          {task.editing ? (
            <input
                type="text"
                value ={editingText}
                onChange ={(e) => setEditingText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    onEditTask(task.id, editingText); // para salir del modo edición
                  }
                }}
                onBlur={() => {
                  onEditTask(task.id, editingText); 
                }}/>
          ) : (
            <>
              <span onClick={() => onToggleComplete(task.id)}> {task.text} </span>
              <button onClick={() =>{
                onToggleEditTask(task.id)
                setEditingText(task.text); // cargar el texto actual al input
              }}> ✏️ Editar </button>
              <button onClick={() =>{onDeleteTask(task.id)}}> ❌ Eliminar </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
