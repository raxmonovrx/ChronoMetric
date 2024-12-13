import PropTypes from 'prop-types'
import './ZodiacSign.css'

function ZodiacSign({ birthDate }) {
	const getZodiacSign = date => {
		if (!date || !(date instanceof Date)) {
			return 'Unknown'
		}

		const month = date.getMonth() + 1
		const day = date.getDate()

		if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries'
		if ((month === 4 && day >= 20) || (month === 5 && day <= 20))
			return 'Taurus'
		if ((month === 5 && day >= 21) || (month === 6 && day <= 20))
			return 'Gemini'
		if ((month === 6 && day >= 21) || (month === 7 && day <= 22))
			return 'Cancer'
		if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo'
		if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo'
		if ((month === 9 && day >= 23) || (month === 10 && day <= 22))
			return 'Libra'
		if ((month === 10 && day >= 23) || (month === 11 && day <= 21))
			return 'Scorpio'
		if ((month === 11 && day >= 22) || (month === 12 && day <= 21))
			return 'Sagittarius'
		if ((month === 12 && day >= 22) || (month === 1 && day <= 19))
			return 'Capricorn'
		if ((month === 1 && day >= 20) || (month === 2 && day <= 18))
			return 'Aquarius'
		return 'Pisces'
	}

	const getChineseZodiac = date => {
		if (!date || !(date instanceof Date)) {
			return 'Unknown'
		}

		const year = date.getFullYear()
		const animals = [
			'Rat',
			'Ox',
			'Tiger',
			'Rabbit',
			'Dragon',
			'Snake',
			'Horse',
			'Goat',
			'Monkey',
			'Rooster',
			'Dog',
			'Pig',
		]
		return animals[(year - 4) % 12]
	}

	const zodiacSign = getZodiacSign(birthDate)
	const chineseZodiac = getChineseZodiac(birthDate)

	return (
		<div className='ZodiacSign'>
			<h2>Your Zodiac Sign (Solar):</h2>
			<p>{zodiacSign}</p>
			<h2>Your Chinese Zodiac Sign:</h2>
			<p>{chineseZodiac}</p>
		</div>
	)
}

ZodiacSign.propTypes = {
	birthDate: PropTypes.instanceOf(Date).isRequired,
}

export default ZodiacSign
