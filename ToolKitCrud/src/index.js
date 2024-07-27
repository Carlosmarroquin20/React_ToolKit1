import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importa el archivo de estilos globales
import App from './components/App'; // Importa el componente principal de la aplicación

// Crea un contenedor de React para renderizar la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza el componente App dentro del contenedor
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
