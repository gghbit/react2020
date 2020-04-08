import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Form = (props) => {
	const [appointment, updateAppointment] = useState({
		pet: '',
		responsible: '',
		dateAppt: '',
		hour: '',
		signs: ''
	});
	const { dateAppt, hour, pet, responsible, signs } = appointment;

	const [error, updateApptrror] = useState(false);

	const handleChangeValueInput = evt => {
		updateAppointment({
			...appointment,
			[evt.target.name]: evt.target.value
		})
	}

	const submitAppointment= evt => {
		evt.preventDefault();
		let isFull = fnIsFull(appointment);
		updateApptrror(!isFull);
		if(isFull) {
			appointment.id = uuidv4();
			props.createAppointment(appointment);
			updateAppointment({
				pet: '',
				responsible: '',
				dateAppt: '',
				hour: '',
				signs: ''
			});
		}
	};
	const fnIsFull = appointment => {
		let keys = Object.keys(appointment);
		const isFull = keys.every( item => appointment[item].trim());
		return keys.length ? isFull : false;
	}

	return (
		<Fragment>
			{ error ? <p className="alerta-error"> Todos los campos son obligatorios</p> : null}
			<form onSubmit={submitAppointment}>
				<label>Nombre mascota</label>
				<input
					autoComplete={props.autocomplete}
					type="text"
					name="pet"
					className="u-full-width"
					placeholder="Nombre mascota"
					value={pet}
					onChange={handleChangeValueInput}
				/>
				<label>Nombre del responsable</label>
				<input
					autoComplete={props.autocomplete}
					type="text"
					name="responsible"
					className="u-full-width"
					placeholder="Nombre responsable"
					value={responsible}
					onChange={handleChangeValueInput}
				/>
				<label>Fecha</label>
				<input
					className="u-full-width"
					name="dateAppt"
					type="date"
					value={dateAppt}
					onChange={handleChangeValueInput}
				/>
				<label>Hora</label>
				<input
					className="u-full-width"
					name="hour"
					type="time"
					value={hour}
					onChange={handleChangeValueInput}
				/>
				<label>Sintomas</label>
				<textarea
					className="u-full-width"
					name="signs"
					value={signs}
					onChange={handleChangeValueInput}
				></textarea>
				<button
					className="u-full-width button-primary "
					type="submit"
				> Agregar cita</button>
			</form>
		</Fragment>
	);
}

Form.defaultProps = {
	autocomplete: 'off',
};
Form.propTypes = {
	createAppointment: PropTypes.func.isRequired,
	autocomplete: PropTypes.string
}

export default Form;