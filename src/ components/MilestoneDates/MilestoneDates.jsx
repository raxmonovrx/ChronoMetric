import PropTypes from 'prop-types'
import './MilestoneDates.css'

function MilestoneDates({ birthDate, t }) {
	// Function to calculate milestone date
	const calculateMilestoneDate = days => {
		const milestoneDate = new Date(
			birthDate.getTime() + days * 24 * 60 * 60 * 1000
		)

		// Format the date as '11 Mart 2004 yil' for Uzbek, '11 March 2004' for English, etc.
		const options = {
			day: '2-digit',
			month: 'long',
			year: 'numeric',
		}
		return milestoneDate.toLocaleDateString(options)
	}

	return (
		<div className='MilestoneDates'>
			<h2>{t.milestoneDates}</h2>
			<ul>
				<li>
					<span>100 {t.days}:</span> {calculateMilestoneDate(100)}
				</li>
				<li>
					<span>1,000 {t.days}:</span> {calculateMilestoneDate(1000)}
				</li>
				<li>
					<span>10,000 {t.days}:</span> {calculateMilestoneDate(10000)}
				</li>
			</ul>
		</div>
	)
}

MilestoneDates.propTypes = {
	birthDate: PropTypes.instanceOf(Date).isRequired,
	t: PropTypes.shape({
		milestoneDates: PropTypes.string.isRequired,
		days: PropTypes.string.isRequired,
	}).isRequired,
	language: PropTypes.string.isRequired, // Added language prop
}

export default MilestoneDates
