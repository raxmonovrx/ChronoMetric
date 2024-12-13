import PropTypes from 'prop-types'
import './DayOfWeek.css'

function DayOfWeek({ birthDate }) {
	const daysOfWeek = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	]

	const getDayOfWeek = date => {
		if (!date || !(date instanceof Date)) {
			return 'Unknown'
		}

		return daysOfWeek[date.getDay()]
	}

	const dayOfWeek = getDayOfWeek(birthDate)

	return (
		<div className='DayOfWeek'>
			<h2>{'Day of the Week You Were Born'}</h2>
			<p>{dayOfWeek}</p>
		</div>
	)
}

DayOfWeek.propTypes = {
	birthDate: PropTypes.instanceOf(Date).isRequired,
}

export default DayOfWeek
