import React from 'react';

const OrderTasks = ({ setOrden }) => {
  return (
    <div className="order-tasks">
      <button onClick={() => setOrden('AZ')}>Ordenar A-Z</button>
      <button onClick={() => setOrden('ZA')}>Ordenar Z-A</button>
      <button onClick={() => setOrden('completadas')}>Completadas primero</button>
      <button onClick={() => setOrden('incompletas')}>Incompletas primero</button>
    </div>
  );
};

export default OrderTasks;
