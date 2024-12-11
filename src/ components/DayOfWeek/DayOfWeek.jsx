import PropTypes from 'prop-types'
import './DayOfWeek.css'

function DayOfWeek({ birthDate, t }) {
	const daysOfWeek = {
		uz: [
			'Yakshanba',
			'Dushanba',
			'Seshanba',
			'Chorshanba',
			'Payshanba',
			'Juma',
			'Shanba',
		],
		en: [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		],
		ru: [
			'Воскресенье',
			'Понедельник',
			'Вторник',
			'Среда',
			'Четверг',
			'Пятница',
			'Суббота',
		],
	}

	const getDayOfWeek = date => {
		if (!date || !(date instanceof Date)) {
			return 'Unknown'
		}
		const language = t.language || 'en'
		return daysOfWeek[language][date.getDay()]
	}

	const dayOfWeek = getDayOfWeek(birthDate)

	return (
		<div className='DayOfWeek'>
			<h2>{t.dayOfWeek || 'Day of the Week You Were Born:'}</h2>
			<p>{dayOfWeek}</p>
		</div>
	)
}

DayOfWeek.propTypes = {
	birthDate: PropTypes.instanceOf(Date).isRequired,
	t: PropTypes.shape({
		dayOfWeek: PropTypes.string,
		language: PropTypes.oneOf(['uz', 'en', 'ru']),
	}).isRequired,
}

export default DayOfWeek
