import PropTypes from 'prop-types'
import './FunFacts.css'

function FunFacts({ birthDate }) {
	const formatDate = date => {
		const options = { year: 'numeric', month: 'long', day: 'numeric' }
		return date.toLocaleDateString('en-US', options)
	}

	return (
		<div className='FunFacts'>
			<h2>Special Day</h2>
			<p>You were born on {formatDate(birthDate)}.</p>
		</div>
	)
}

FunFacts.propTypes = {
	birthDate: PropTypes.instanceOf(Date).isRequired,
}

export default FunFacts
