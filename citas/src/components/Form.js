import React, { Fragment, useState } from 'react';

const Form = () => {
	const [appointment, updateAppointment] = useState({
		pet: '',
		responsible: '',
		datee: '',
		hour: '',
		signs: ''
	});
	const { datee, hour, pet, responsible, signs } = appointment;
	const handleChangeValueInput = evt => {
		updateAppointment({
			...appointment,
			[evt.target.name]: evt.target.value
		})
	}

	const submitAppointment= evt => {
		evt.preventDefault();
		let isFull = fnIsFull(appointment);
		if(isFull) {
			console.log('Listo')
		} else {
			console.log('Error')
		}
	};
	const fnIsFull = appointment => {
		let keys = Object.keys(appointment);
		const isFull = keys.every( item => appointment[item].trim() !== '');
		return keys.length ? isFull : false;
	}

	return (
		<Fragment>
			<h2> Crear cita</h2>
			<form onSubmit={submitAppointment}>
				<label>Nombre mascota</label>
				<input
					type="text"
					name="pet"
					className="u-full-width"
					placeholder="Nombre mascota"
					value={pet}
					onChange={handleChangeValueInput}
				/>
				<label>Nombre del responsable</label>
				<input
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
					name="datee"
					type="date"
					value={datee}
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
					className="u-full-width button-primary"
					type="submit"
				> Agregar cita</button>
			</form>
		</Fragment>
	);
}

export default Form;
