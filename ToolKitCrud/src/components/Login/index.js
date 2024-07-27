import React, { useState } from 'react';
// Importa Swal desde sweetalert2 para mostrar alertas
import Swal from 'sweetalert2';

const Login = ({ setIsAuthenticated }) => {
  // Definir las credenciales de administrador
  const adminEmail = 'admin@example.com';
  const adminPassword = 'qwerty';

  // Define estados locales para los campos del formulario
  const [email, setEmail] = useState('admin@example.com'); // Inicializa con el correo del administrador
  const [password, setPassword] = useState('qwerty'); // Inicializa con la contraseña del administrador

  // Función para manejar el envío del formulario de inicio de sesión
  const handleLogin = e => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario (recarga de página)

    // Verifica si las credenciales ingresadas coinciden con las del administrador
    if (email === adminEmail && password === adminPassword) {
      // Muestra un alerta de carga y luego una de éxito
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          // Guarda el estado de autenticación en localStorage
          localStorage.setItem('is_authenticated', true);
          // Actualiza el estado de autenticación
          setIsAuthenticated(true);

          // Muestra una alerta de éxito
          Swal.fire({
            icon: 'success',
            title: 'Successfully logged in!',
            showConfirmButton: false,
            timer: 1500,
          });
        },
      });
    } else {
      // Muestra un alerta de carga y luego una de error
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          // Muestra una alerta de error si las credenciales son incorrectas
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Incorrect email or password.',
            showConfirmButton: true,
          });
        },
      });
    }
  };

  return (
    <div className="small-container">
      {/* Formulario para iniciar sesión */}
      <form onSubmit={handleLogin}>
        <h1>Admin Login</h1>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="admin@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="qwerty"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input style={{ marginTop: '12px' }} type="submit" value="Login" />
      </form>
    </div>
  );
};

// Exporta el componente Login para usarlo en otros archivos
export default Login;
