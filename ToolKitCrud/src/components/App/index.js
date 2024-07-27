import React, { useState, useEffect } from 'react';

// Importa los componentes Login y Dashboard
import Login from '../Login';
import Dashboard from '../Dashboard';

const App = () => {
  // Estado para verificar si el usuario está autenticado
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    // Al cargar el componente, verifica si hay un valor en el localStorage para 'is_authenticated'
    // y actualiza el estado de autenticación
    setIsAuthenticated(JSON.parse(localStorage.getItem('is_authenticated')));
  }, []); // El array vacío significa que este efecto se ejecuta solo una vez, al montar el componente

  return (
    <>
      {/* Muestra el componente Dashboard si el usuario está autenticado,
          de lo contrario, muestra el componente Login */}
      {isAuthenticated ? (
        <Dashboard setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <Login setIsAuthenticated={setIsAuthenticated} />
      )}
    </>
  );
};

// Exporta el componente App para que pueda ser usado en otras partes de la aplicación
export default App;
