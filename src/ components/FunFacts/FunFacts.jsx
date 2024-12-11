import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import './FunFacts.css'

function FunFacts({ birthDate, t, language }) {
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
				translateFact(data, language)
			} catch (error) {
				console.error('Error fetching fact:', error)
				setFact(t.errorFetchingFact)
			}
		}

		const translateFact = async (text, targetLang) => {
			if (targetLang === 'en') {
				setTranslatedFact(text) // Ingliz tilida tarjima kerak emas
				return
			}

			try {
				const res = await fetch('https://libretranslate.com/translate', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						q: text,
						source: 'en',
						target: targetLang,
					}),
				})

				const result = await res.json()
				setTranslatedFact(result.translatedText)
			} catch (error) {
				console.error('Error translating fact:', error)
				setTranslatedFact(t.translationError)
			}
		}

		if (birthDate) {
			fetchFact()
		}
	}, [birthDate, t, language])

	return (
		<div className='FunFacts'>
			<h2>{t.funFact}</h2>
			<p>{translatedFact || fact}</p>
		</div>
	)
}

FunFacts.propTypes = {
	birthDate: PropTypes.instanceOf(Date).isRequired,
	t: PropTypes.shape({
		funFact: PropTypes.string.isRequired,
		errorFetchingFact: PropTypes.string.isRequired,
		translationError: PropTypes.string.isRequired,
	}).isRequired,
	language: PropTypes.string.isRequired,
}

export default FunFacts
