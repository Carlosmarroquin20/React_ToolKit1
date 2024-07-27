import React from 'react';
// Importa Swal desde sweetalert2 para mostrar alertas
import Swal from 'sweetalert2';

const Logout = ({ setIsAuthenticated }) => {
  // Función para manejar el proceso de cierre de sesión
  const handleLogout = () => {
    // Muestra una alerta de confirmación antes de cerrar sesión
    Swal.fire({
      icon: 'question',
      title: 'Logging Out',
      text: 'Are you sure you want to log out?', // Texto que se muestra en la alerta
      showCancelButton: true, // Muestra el botón de cancelar
      confirmButtonText: 'Yes', // Texto del botón de confirmación
    }).then(result => {
      // Si el usuario confirma, procede con el cierre de sesión
      if (result.value) {
        // Muestra una alerta de carga y luego cierra sesión
        Swal.fire({
          timer: 1500, // Duración de la alerta en milisegundos
          showConfirmButton: false, // Oculta el botón de confirmación
          willOpen: () => {
            Swal.showLoading(); // Muestra una animación de carga
          },
          willClose: () => {
            // Guarda el estado de autenticación en localStorage
            localStorage.setItem('is_authenticated', false);
            // Actualiza el estado de autenticación
            setIsAuthenticated(false);
          },
        });
      }
    });
  };

  return (
    <button
      style={{ marginLeft: '12px' }} // Estilo del botón
      className="muted-button" // Clase CSS del botón
      onClick={handleLogout} // Llama a handleLogout al hacer clic
    >
      Logout
    </button>
  );
};

// Exporta el componente Logout para usarlo en otros archivos
export default Logout;
