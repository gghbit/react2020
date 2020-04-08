import React, {Fragment, useState, useEffect} from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';

function App() {
  let initialAppointments = JSON.parse(localStorage.getItem('appointments')) || [];

  const [appointments, saveAppointments] = useState(initialAppointments);
  const createAppointment = appointment => {
    saveAppointments([
      ...appointments,
      appointment
    ]);
  }
  const deleteAppointment = appointment => {
    let filteredAppointment = appointments.filter( item => item.id !== appointment);
    saveAppointments(filteredAppointment);
  };

  const scheduleTitle = appointments.length ? 'Administra tus citas' : 'No hay citas';

  useEffect(() => {
    let savedAppointments = initialAppointments ? appointments  : [];
    localStorage.setItem('appointments', JSON.stringify(savedAppointments));
  }, [appointments, initialAppointments]);

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
			      <h2>Crear cita</h2>
            <Form
              createAppointment= {createAppointment}
            />
          </div>
          <div className="one-half column">
            <h2>{scheduleTitle}</h2>
            {
              appointments.map( item => (
              <Appointment
                key={item.id}
                titleButton="Eliminar"
                actionClickButton={deleteAppointment}
                {...item}
              />))
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
