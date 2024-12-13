import PropTypes from 'prop-types'
import './MilestoneDates.css'

function MilestoneDates({ birthDate }) {
	const calculateMilestoneDate = days => {
		const milestoneDate = new Date(
			birthDate.getTime() + days * 24 * 60 * 60 * 1000
		)

		const options = {
			day: '2-digit',
			month: 'numeric',
			year: 'numeric',
		}
		return milestoneDate.toLocaleDateString(options)
	}

	return (
		<div className='MilestoneDates'>
			<h2>Milestone Dates:</h2>
			<ul>
				<li>
					<span>100 days:</span> {calculateMilestoneDate(100)}
				</li>
				<li>
					<span>1,000 days:</span> {calculateMilestoneDate(1000)}
				</li>
				<li>
					<span>5,000 days:</span> {calculateMilestoneDate(5000)}
				</li>
				<li>
					<span>10,000 days:</span> {calculateMilestoneDate(10000)}
				</li>
			</ul>
		</div>
	)
}

MilestoneDates.propTypes = {
	birthDate: PropTypes.instanceOf(Date).isRequired,
}

export default MilestoneDates
