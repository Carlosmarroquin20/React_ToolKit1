import React, { useState } from 'react'; // Importamos React y el hook useState
import Swal from 'sweetalert2'; // Importamos SweetAlert2 para mostrar alertas

// Componente Add: Formulario para agregar un nuevo empleado
const Add = ({ employees, setEmployees, setIsAdding }) => {
  // Definimos estados locales para almacenar los valores de los campos del formulario
  const [firstName, setFirstName] = useState(''); // Estado para el primer nombre
  const [lastName, setLastName] = useState(''); // Estado para el apellido
  const [email, setEmail] = useState(''); // Estado para el email
  const [salary, setSalary] = useState(''); // Estado para el salario
  const [date, setDate] = useState(''); // Estado para la fecha

  // Función que maneja la acción de agregar un nuevo empleado
  const handleAdd = e => {
    e.preventDefault(); // Evita que el formulario se envíe de la manera tradicional y recargue la página

    // Verificamos que todos los campos estén completos
    if (!firstName || !lastName || !email || !salary || !date) {
      return Swal.fire({
        icon: 'error', // Icono de error
        title: 'Error!', // Título de la alerta
        text: 'All fields are required.', // Mensaje de la alerta
        showConfirmButton: true, // Mostrar botón de confirmación
      });
    }

    // Creamos un nuevo objeto empleado con los datos del formulario
    const id = employees.length + 1; // Generamos un ID único sumando 1 a la longitud del array de empleados
    const newEmployee = {
      id,
      firstName,
      lastName,
      email,
      salary,
      date,
    };

    // Agregamos el nuevo empleado a la lista de empleados
    employees.push(newEmployee); // Añadimos el nuevo empleado al array de empleados
    localStorage.setItem('employees_data', JSON.stringify(employees)); // Guardamos la lista de empleados en el almacenamiento local del navegador
    setEmployees(employees); // Actualizamos el estado de empleados en el componente principal
    setIsAdding(false); // Cerramos el formulario de agregar empleado

    // Mostramos una alerta de éxito
    Swal.fire({
      icon: 'success', // Icono de éxito
      title: 'Added!', // Título de la alerta
      text: `${firstName} ${lastName}'s data has been Added.`, // Mensaje de la alerta con el nombre del nuevo empleado
      showConfirmButton: false, // No mostrar botón de confirmación
      timer: 1500, // Mostrar la alerta por 1.5 segundos
    });
  };

  // Renderizamos el formulario
  return (
    <div className="small-container"> {/* Contenedor del formulario */}
      <form onSubmit={handleAdd}> {/* Llama a handleAdd cuando se envía el formulario */}
        <h1>Add Employee</h1> {/* Título del formulario */}
        <label htmlFor="firstName">First Name</label> {/* Etiqueta del campo de primer nombre */}
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={firstName} // Valor del campo de primer nombre
          onChange={e => setFirstName(e.target.value)} // Actualiza el estado cuando cambia el valor del campo
        />
        <label htmlFor="lastName">Last Name</label> {/* Etiqueta del campo de apellido */}
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={lastName} // Valor del campo de apellido
          onChange={e => setLastName(e.target.value)} // Actualiza el estado cuando cambia el valor del campo
        />
        <label htmlFor="email">Email</label> {/* Etiqueta del campo de email */}
        <input
          id="email"
          type="email"
          name="email"
          value={email} // Valor del campo de email
          onChange={e => setEmail(e.target.value)} // Actualiza el estado cuando cambia el valor del campo
        />
        <label htmlFor="salary">Salary ($)</label> {/* Etiqueta del campo de salario */}
        <input
          id="salary"
          type="number"
          name="salary"
          value={salary} // Valor del campo de salario
          onChange={e => setSalary(e.target.value)} // Actualiza el estado cuando cambia el valor del campo
        />
        <label htmlFor="date">Date</label> {/* Etiqueta del campo de fecha */}
        <input
          id="date"
          type="date"
          name="date"
          value={date} // Valor del campo de fecha
          onChange={e => setDate(e.target.value)} // Actualiza el estado cuando cambia el valor del campo
        />
        <div style={{ marginTop: '30px' }}> {/* Contenedor de los botones */}
          <input type="submit" value="Add" /> {/* Botón para enviar el formulario */}
          <input
            style={{ marginLeft: '12px' }} // Margen izquierdo del botón de cancelar
            className="muted-button" // Clase CSS para el botón de cancelar
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)} // Cierra el formulario de agregar empleado sin añadir nada
          />
        </div>
      </form>
    </div>
  );
};

export default Add; // Exporta el componente Add para que pueda ser utilizado en otros archivos
