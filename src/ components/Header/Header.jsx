import PropTypes from 'prop-types'
import './Header.css'

function Header({ title, subtitle }) {
	return (
		<header className='Header'>
			<h1>{title}</h1>
			<p>{subtitle}</p>
		</header>
	)
}

Header.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
}

export default Header
