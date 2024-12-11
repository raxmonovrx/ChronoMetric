import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

import './DayCounter.css'

function DayCounter({ birthDate, t }) {
	const [daysPassed, setDaysPassed] = useState(0)

	useEffect(() => {
		const updateDaysPassed = () => {
			const today = new Date()
			const timeDiff = today.getTime() - birthDate.getTime()
			const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24))
			setDaysPassed(daysDiff)
		}

		updateDaysPassed()
		const timer = setInterval(updateDaysPassed, 1000)

		return () => clearInterval(timer)
	}, [birthDate])

	return (
		<div className='DayCounter'>
			<h2>{t.daysSinceBirth}</h2>
			<p>
				{daysPassed} {t.days}
			</p>
		</div>
	)
}

DayCounter.propTypes = {
	birthDate: PropTypes.instanceOf(Date).isRequired,
	t: PropTypes.shape({
		daysSinceBirth: PropTypes.string.isRequired,
		days: PropTypes.string.isRequired,
	}).isRequired,
}

export default DayCounter
