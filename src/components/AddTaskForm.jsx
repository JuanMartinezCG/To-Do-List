import React, { useState } from "react";

const AddTaskForm = ({ onAddTask }) => {
    const [inputValue, setInputValue] = useState(''); // estado para el valor del input

    const handleSubmit = (e) => {
        e.preventDefault(); // evita que se recargue la página
    
        if (inputValue.trim() === '') return; // no agregar tareas vacías
    
        onAddTask(inputValue); // le dice al padre que agregue la tarea
        setInputValue('');     // limpia el input
      };
      
    return (
        <form className="add-task-form" onSubmit={handleSubmit}>
        <input type="text" 
        placeholder="Escribe una Nueva Tarea"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} />
        <button type="submit">Agregar</button>
        </form>
    );
}
export default AddTaskForm;