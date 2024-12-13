import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

import './DayCounter.css'

function DayCounter({ birthDate }) {
	const [daysPassed, setDaysPassed] = useState(0)

	useEffect(() => {
		const updateDaysPassed = () => {
			const today = new Date()
			const timeDiff = today.getTime() - birthDate.getTime()
			const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24))
			setDaysPassed(daysDiff)
		}

		updateDaysPassed()
		const timer = setInterval(updateDaysPassed, 86400000)

		return () => clearInterval(timer)
	}, [birthDate])

	return (
		<div className='DayCounter'>
			<h2>Days since birth</h2>
			<p>{daysPassed} days</p>
		</div>
	)
}

DayCounter.propTypes = {
	birthDate: PropTypes.instanceOf(Date).isRequired,
}

export default DayCounter
