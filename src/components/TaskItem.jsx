import React, { useState } from 'react';

const TaskItem = ({ task, onToggleComplete, onDeleteTask, onToggleEditTask, onEditTask }) => {
  const [editingText, setEditingText] = useState(task.text);

  const handleEdit = () => {
    if (editingText.trim() !== '') {
      onEditTask(task.id, editingText);
    }
  };

  return (
    <li className={task.completed ? 'completed' : ''}>
      {task.editing ? (
        <input
          type="text"
          value={editingText}
          onChange={(e) => setEditingText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleEdit();
            }
          }}
          onBlur={handleEdit}
        />
      ) : (
        <>
          <span onClick={() => onToggleComplete(task.id)}>
            {task.text}
          </span>
          <button onClick={() => onToggleEditTask(task.id)}>✏️ Editar</button>
          <button onClick={() => onDeleteTask(task.id)}>❌ Eliminar </button>
        </>
      )}
    </li>
  );
};

export default TaskItem;
