import React from 'react';

const FilterTasks = ({setFiltro}) => { // Cambia el filtro de tareas
  return (
    <div className="filtro-tareas">
        <h4>Filtrar Tareas: {/* Cambia el filtro de tareas */}
            <button onClick={() => setFiltro("todas")}>Todas</button>
            <button onClick={() => setFiltro("completadas")}>Completadas</button>
            <button onClick={() => setFiltro("pendientes")}>Pendientes</button>
        </h4>
    </div>
  );
}

export default FilterTasks;
