import React, { useState } from 'react'; // Importa React y el hook useState
import Swal from 'sweetalert2'; // Importa SweetAlert2 para mostrar alertas

// Componente Edit: Formulario para editar un empleado existente
const Edit = ({ employees, selectedEmployee, setEmployees, setIsEditing }) => {
  // Extrae el ID del empleado seleccionado para la edición
  const id = selectedEmployee.id;

  // Define estados locales para los campos del formulario, inicializados con los valores del empleado seleccionado
  const [firstName, setFirstName] = useState(selectedEmployee.firstName);
  const [lastName, setLastName] = useState(selectedEmployee.lastName);
  const [email, setEmail] = useState(selectedEmployee.email);
  const [salary, setSalary] = useState(selectedEmployee.salary);
  const [date, setDate] = useState(selectedEmployee.date);

  // Función para manejar el envío del formulario de edición
  const handleUpdate = e => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario (recarga de página)

    // Verifica si algún campo está vacío
    if (!firstName || !lastName || !email || !salary || !date) {
      // Muestra una alerta de error si algún campo está vacío
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    // Crea un nuevo objeto de empleado con los datos actualizados
    const employee = {
      id,
      firstName,
      lastName,
      email,
      salary,
      date,
    };

    // Busca y actualiza el empleado en la lista de empleados
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === id) {
        employees.splice(i, 1, employee); // Reemplaza el empleado en la lista
        break;
      }
    }

    // Guarda la lista actualizada en localStorage
    localStorage.setItem('employees_data', JSON.stringify(employees));
    // Actualiza el estado de empleados
    setEmployees(employees);
    // Cierra el formulario de edición
    setIsEditing(false);

    // Muestra una alerta de éxito
    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      {/* Formulario para editar un empleado */}
      <form onSubmit={handleUpdate}>
        <h1>Edit Employee</h1> {/* Título del formulario */}
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
          <input type="submit" value="Update" /> {/* Botón para enviar el formulario */}
          <input
            style={{ marginLeft: '12px' }} // Margen izquierdo del botón de cancelar
            className="muted-button" // Clase CSS para el botón de cancelar
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)} // Cierra el formulario de edición sin guardar cambios
          />
        </div>
      </form>
    </div>
  );
};

export default Edit; // Exporta el componente Edit para que pueda ser utilizado en otros archivos
