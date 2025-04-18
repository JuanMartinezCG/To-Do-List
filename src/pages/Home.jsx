import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import AddTaskForm from '../components/AddTaskForm';
// Importa los componentes necesarios para la página de inicio

const Home = () => {
  const [tareas, setTareas] = useState([
    { id: 1, text: 'Comprar leche' , completed: false, editing: false},
    { id: 2, text: 'Estudiar React', completed: false, editing: false}
  ]);
  
  const AddTask = (texto) => { //agregar tarea
    const nuevaTarea = {
      id: Date.now(), // Crea un id único basado en el tiempo actual
      text: texto,
    };
    setTareas([...tareas, nuevaTarea]); // Actualiza el estado de tareas con la nueva tarea
  };

  const DeleteTask = (id) => { //eliminar tarea
    console.log("Recibido para eliminar:", id);
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id); // Filtra las tareas para eliminar la seleccionada
    setTareas(tareasActualizadas); // Actualiza el estado de tareas con las tareas filtradas
  }

  const handleToggleComplete = (id) => { //marcar tarea como completada
    const updateTask = tareas.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task); // Cambia el estado de completado de la tarea seleccionada
      setTareas(updateTask); // Actualiza el estado de tareas con la tarea modificada
  }

  const editTask  = (id, newTask) => { //editar tarea
    const editingTask = tareas.map(task => 
      task.id === id ? { ...task, text:newTask, editing: false } : task);
    setTareas(editingTask); // Cambia el estado de edición de la tarea seleccionada
  }

  const toggleEditTask = (id) => {
    const editingTask = tareas.map(task =>
      task.id === id ? { ...task, editing: true} : task
    );
    setTareas(editingTask); // Cambia el estado de edición de la tarea seleccionada
  };

  return (
    <div className="home">
      <h1>To Do List</h1>
      <AddTaskForm onAddTask={AddTask} />{/* Renderizamos el formulario y le pasamos la función para agregar tareas */}
      <TaskList /*Renderizamos la lista de tareas y le pasamos el array como prop */
      tasks={tareas}
      onDeleteTask={DeleteTask} // Renderizamos la lista de tareas y le pasamos la función para eliminar tareas
      onToggleComplete={handleToggleComplete} // Renderizamos la lista de tareas y le pasamos la función para marcar tareas como completadas
      onToggleEditTask={toggleEditTask} // Renderizamos la lista de tareas y le pasamos la función para editar tareas
      onEditTask={editTask} // Renderizamos la lista de tareas y le pasamos la función para editar tareas
      /> 
      
    </div>
  );
};

 export default Home;
