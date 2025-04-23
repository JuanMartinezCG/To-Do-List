import React from 'react';

const FilterTasks = ({setFiltro}) => { // Cambia el filtro de tareas
  return (
    <div id="filter-tasks" className="filtro-tareas">
        <h4 className='titulo-filtro'>FILTAR TAREAS: {/* Cambia el filtro de tareas */}
            <button className="filter-button" onClick={() => setFiltro("todas")}>Todas</button>
            <button className="filter-button" onClick={() => setFiltro("completadas")}>Completadas</button>
            <button className="filter-button" onClick={() => setFiltro("pendientes")}>Pendientes</button>
        </h4>
    </div>
  );
}

export default FilterTasks;
