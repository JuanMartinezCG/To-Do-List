import React from 'react';

const OrderTasks = ({ setOrden }) => {
  return (
    <div id="order-tasks" className="order-tasks">
      <button className="order-button" onClick={() => setOrden('AZ')}>Ordenar A-Z</button>
      <button className="order-button" onClick={() => setOrden('ZA')}>Ordenar Z-A</button>
      <button className="order-button" onClick={() => setOrden('completadas')}>Completadas primero</button>
      <button className="order-button" onClick={() => setOrden('incompletas')}>Incompletas primero</button>
    </div>
  );
};

export default OrderTasks;
