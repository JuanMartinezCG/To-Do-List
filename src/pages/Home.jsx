import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import AddTaskForm from '../components/AddTaskForm';

const Home = () => {
  const [tareas, setTareas] = useState([
    { id: 1, text: 'Comprar leche' },
    { id: 2, text: 'Estudiar React' },
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

  return (
    <div className="home">
      <h1>To Do List</h1>
      <AddTaskForm onAddTask={AddTask} />{/* Renderizamos el formulario y le pasamos la función para agregar tareas */}
      <TaskList tasks={tareas}
      onDeleteTask={DeleteTask} /> {/* Renderizamos la lista de tareas y le pasamos el array como prop */}
    </div>
  );
};

export default Home;
