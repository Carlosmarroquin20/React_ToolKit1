import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import Header from './Header';  // Importa el componente Header
import Table from './Table';    // Importa el componente Table
import Add from './Add';        // Importa el componente Add
import Edit from './Edit';      // Importa el componente Edit

import { employeesData } from '../../data';  // Importa datos iniciales de empleados

const Dashboard = ({ setIsAuthenticated }) => {
  // Estado para manejar la lista de empleados
  const [employees, setEmployees] = useState(employeesData);
  // Estado para manejar el empleado seleccionado para edición
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  // Estado para manejar la visibilidad del formulario de añadir empleado
  const [isAdding, setIsAdding] = useState(false);
  // Estado para manejar la visibilidad del formulario de edición de empleado
  const [isEditing, setIsEditing] = useState(false);

  // Efecto para cargar empleados desde localStorage al montar el componente
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('employees_data'));
    if (data !== null && Object.keys(data).length !== 0) setEmployees(data);
  }, []);

  // Maneja la edición de un empleado
  const handleEdit = id => {
    const [employee] = employees.filter(employee => employee.id === id);
    setSelectedEmployee(employee);
    setIsEditing(true);
  };

  // Maneja la eliminación de un empleado
  const handleDelete = id => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then(result => {
      if (result.value) {
        const [employee] = employees.filter(employee => employee.id === id);

        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        // Actualiza la lista de empleados en localStorage y en el estado
        const employeesCopy = employees.filter(employee => employee.id !== id);
        localStorage.setItem('employees_data', JSON.stringify(employeesCopy));
        setEmployees(employeesCopy);
      }
    });
  };

  return (
    <div className="container">
      {/* Renderiza Header y Table si no se está añadiendo ni editando */}
      {!isAdding && !isEditing && (
        <>
          <Header
            setIsAdding={setIsAdding}
            setIsAuthenticated={setIsAuthenticated}
          />
          <Table
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {/* Renderiza el formulario Add si se está añadiendo un empleado */}
      {isAdding && (
        <Add
          employees={employees}
          setEmployees={setEmployees}
          setIsAdding={setIsAdding}
        />
      )}
      {/* Renderiza el formulario Edit si se está editando un empleado */}
      {isEditing && (
        <Edit
          employees={employees}
          selectedEmployee={selectedEmployee}
          setEmployees={setEmployees}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default Dashboard;
