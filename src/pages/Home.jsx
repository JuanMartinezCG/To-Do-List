import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import AddTaskForm from '../components/AddTaskForm';
import FilterTasks from '../components/FilterTasks'; // Importa el componente de filtro de tareas
import OrdenTask from '../components/OrdenTask'; // Importa el componente de ordenamiento de tareas
import useLocalStorage from '../hooks/useLocalStorage'; // Importa el hook personalizado para manejar el localStorage
// Importa los componentes necesarios para la página de inicio

const Home = () => { // Componente principal de la página de inicio|
  const [tareas, setTareas] = useLocalStorage('tareas', [
    { id: 1, text: 'Comprar leche', completed: false, editing: false },
    { id: 2, text: 'Estudiar React', completed: false, editing: false }
  ]);


  // Estados de Variables
  const [filtro, setFiltro] = useState("todas"); // El valor inicial es "todas"
  const [orden, setOrden] = useState(''); // nuevo estado para ordenar

  const AddTask = (texto) => { //agregar tarea
    const nuevaTarea = {
      id: Date.now(), // Crea un id único basado en el tiempo actual
      text: texto, // El texto de la tarea
      completed: false, // Marca la tarea como no completada por defecto
      editing: false // Marca la tarea como no editada por defecto
    };
    console.log("Recibido para agregar:", nuevaTarea);
    setTareas([...tareas, nuevaTarea]); // Actualiza el estado de tareas con la nueva tarea
  };

  const DeleteTask = (id) => { //eliminar tarea
    console.log("Recibido para eliminar:", id);
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id); // Filtra las tareas para eliminar la seleccionada
    console.log("Tareas después de eliminar:", tareasActualizadas);
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
    console.log("Recibido para editar:", id, newTask);
    console.log("Tareas después de editar:", editingTask);
    setTareas(editingTask); // Cambia el estado de edición de la tarea seleccionada
  }

  const toggleEditTask = (id) => {
    const editingTask = tareas.map(task =>
      task.id === id ? { ...task, editing: true} : task
    ); // Cambia el estado de edición de la tarea seleccionada
    console.log("Recibido para editar:", id);    
    setTareas(editingTask); // Cambia el estado de edición de la tarea seleccionada
  };
  
  // Filtrado de tareas
  const tareasFiltradas = tareas.filter((task) => {
    if (filtro === "completadas") return task.completed;
    if (filtro === "pendientes") return !task.completed;
    return true; // Para "todas", no se filtra nada
  });

  // Ordenamiento de tareas
const tareasFinales = [...tareasFiltradas].sort((a, b) => {
  if (orden === 'AZ') {return a.text.localeCompare(b.text);}
  if (orden === 'ZA') {return b.text.localeCompare(a.text);}
  if (orden === 'completadas') {return b.completed - a.completed;}
  if (orden === 'incompletas') {return a.completed - b.completed;}
  return 0; //sin orden
});

  
  useEffect(() => { // Guarda las tareas en el localStorage cada vez que cambian
    console.log("Guardando tareas en localStorage:", tareas);
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  return (
    <div className="home">
      <h1>To Do List</h1>
      <AddTaskForm onAddTask={AddTask} />{/* Renderizamos el formulario y le pasamos la función para agregar tareas */}
      
      <FilterTasks setFiltro={setFiltro} /> {/* Renderizamos el filtro de tareas */}
      
      <OrdenTask setOrden={setOrden} /> {/* Agregar el componente OrderTasks aquí */}
      
      <TaskList /*Renderizamos la lista de tareas y le pasamos el array como prop */
      tasks={tareasFinales}
      onDeleteTask={DeleteTask} // Renderizamos la lista de tareas y le pasamos la función para eliminar tareas
      onToggleComplete={handleToggleComplete} // Renderizamos la lista de tareas y le pasamos la función para marcar tareas como completadas
      onToggleEditTask={toggleEditTask} // Renderizamos la lista de tareas y le pasamos la función para editar tareas
      onEditTask={editTask} // Renderizamos la lista de tareas y le pasamos la función para editar tareas
      /> 
    </div>
  );
};

 export default Home;
