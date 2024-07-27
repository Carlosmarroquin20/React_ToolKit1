import React from 'react';
// Importa el componente Logout desde su ubicación relativa
import Logout from '../Logout';

// Componente funcional Header que recibe props
const Header = ({ setIsAdding, setIsAuthenticated }) => {
  return (
    <header>
      {/* Título de la página */}
      <h1>Employee Management</h1>
      <div style={{ marginTop: '30px', marginBottom: '18px' }}>
        {/* Botón para añadir un empleado */}
        <button onClick={() => setIsAdding(true)}>Add Employee</button>
        {/* Componente Logout que maneja el estado de autenticación */}
        <Logout setIsAuthenticated={setIsAuthenticated} />
      </div>
    </header>
  );
};

// Exporta el componente Header para usarlo en otros archivos
export default Header;
