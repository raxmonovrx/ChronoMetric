import PropTypes from 'prop-types'
import { useState } from 'react'
import './BirthDateInput.css'

function BirthDateInput({ onBirthDateChange, t }) {
	const [date, setDate] = useState('')
	const [error, setError] = useState('')

	const handleDateChange = e => {
		const inputDate = e.target.value
		setDate(inputDate)

		const selectedDate = new Date(inputDate)
		const currentDate = new Date()

		if (selectedDate > currentDate) {
			setError(t.errorMessage)
			onBirthDateChange(null)
		} else {
			setError('')
			onBirthDateChange(selectedDate)
		}
	}

	return (
		<div className='BirthDateInput'>
			<label htmlFor='birthdate'>{t.enterBirthDate}</label>
			<input
				type='date'
				id='birthdate'
				value={date}
				onChange={handleDateChange}
				max={new Date().toISOString().split('T')[0]}
			/>
			{error && <p className='error'>{error}</p>}
		</div>
	)
}

BirthDateInput.propTypes = {
	onBirthDateChange: PropTypes.func.isRequired,
	t: PropTypes.shape({
		enterBirthDate: PropTypes.string.isRequired,
		errorMessage: PropTypes.string.isRequired,
	}).isRequired,
}

export default BirthDateInput
