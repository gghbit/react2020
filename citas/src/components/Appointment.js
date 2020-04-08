import React from 'react';
import PropTypes from 'prop-types';
const Appointment = (props) => {
  let {
    id,
    pet,
    responsible,
    dateAppt,
    hour,
    signs,
    titleButton,
    actionClickButton
  } = props;
  const handleClickButton = (evt) => {
    evt.preventDefault();
    actionClickButton(id);
  }
  return (
    <div className="cita">
      <p><span>Mascota: </span>{pet}</p>
      <p><span>Responsable: </span>{responsible}</p>
      <p><span>Fecha: </span>{dateAppt}</p>
      <p><span>Hora: </span>{hour}</p>
      <p><span>Sintomas: </span>{signs}</p>
      <button
        className="button u-full-width"
        onClick={handleClickButton}
      >{titleButton} &times;</button>
    </div>
  )
};
Appointment.propTypes = {
  id: PropTypes.string.isRequired,
  pet: PropTypes.string.isRequired,
  responsible: PropTypes.string.isRequired,
  dateAppt: PropTypes.string.isRequired,
  hour: PropTypes.string.isRequired,
  signs: PropTypes.string.isRequired,
  titleButton: PropTypes.string,
  actionClickButton: PropTypes.func.isRequired
}

export default Appointment;
