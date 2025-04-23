import React, { useState } from 'react';

const TaskItem = ({  task,
  onDeleteTask,
  onToggleComplete,
  onToggleEditTask,
  onEditTask
}) => {
  const [editingText, setEditingText] = useState(task.text); // ← aquí inicializamos el texto editable

  const handleEdit = () => {
    if (editingText.trim() !== '') {
      onEditTask(task.id, editingText); // ← enviamos el nuevo texto
    }
  };

  return (
    <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
      {task.editing ? (
        // Si la tarea está en modo edición, mostramos un input
        <input
          type="text"
          id={`edit-task-${task.id}`}
          className="edit-task-input"
          value={editingText} // Mostramos el texto que estamos editando
          onChange={(e) => setEditingText(e.target.value)} // Actualizamos el texto mientras escribe
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleEdit(); // Al presionar Enter, guarda la edición
            }
          }}
          onBlur={handleEdit} // También guarda la edición si pierde el foco
        />
      ) : (
        // Si no está en modo edición, mostramos el texto normal de la tarea
        <>
          <span className="task-text" onClick={() => onToggleComplete(task.id)}>
            {task.text}
          </span>
          <div className="task-buttons">
            <input
              type="checkbox"
              className="task-checkbox"
              // Cambia el estado de la tarea al hacer clic en el checkbox
              checked={task.completed}
              onChange={() => onToggleComplete(task.id)}
            />
            <button className="edit-task-button" onClick={() => onToggleEditTask(task.id)}>✏️</button>
            <button className="delete-task-button" onClick={() => onDeleteTask(task.id)}>❌</button>
          </div>
        </>
      )}
    </li>
  );
};

export default TaskItem;
