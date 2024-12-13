import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import './FunFacts.css'

function FunFacts({ birthDate }) {
	const [fact, setFact] = useState('')
	const [translatedFact, setTranslatedFact] = useState('')

	useEffect(() => {
		const fetchFact = async () => {
			const month = birthDate.getMonth() + 1
			const day = birthDate.getDate()

			try {
				const response = await fetch(
					`http://numbersapi.com/${month}/${day}/date`
				)
				const data = await response.text()
				setFact(data)
				setTranslatedFact(data)
			} catch (error) {
				console.error('Error fetching fact:', error)
				setFact('Error fetching fact')
			}
		}

		if (birthDate) {
			fetchFact()
		}
	}, [birthDate])

	return (
		<div className='FunFacts'>
			<h2>Fun Fact</h2>
			<p>{translatedFact || fact}</p>
		</div>
	)
}

FunFacts.propTypes = {
	birthDate: PropTypes.instanceOf(Date).isRequired,
}

export default FunFacts
