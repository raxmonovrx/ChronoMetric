import { useState } from 'react'
import BirthDateInput from './ components/BirthDateInput/BirthDateInput'
import DayCounter from './ components/DayCounter/DayCounter'
import DayOfWeek from './ components/DayOfWeek/DayOfWeek'
import FunFacts from './ components/FunFacts/FunFacts'
import Header from './ components/Header/Header'
import MilestoneDates from './ components/MilestoneDates/MilestoneDates'
import ZodiacSign from './ components/ZodiacSign/ZodiacSign'
import './App.css'
import { translations } from './translations'

function App() {
	const [birthDate, setBirthDate] = useState(null)
	const [language, setLanguage] = useState('uz')

	const handleBirthDateChange = date => {
		setBirthDate(date)
	}

	const handleLanguageChange = e => {
		setLanguage(e.target.value)
	}

	const t = translations[language] || translations.en

	return (
		<div className='App'>
			<div className='language-selector'>
				<select value={language} onChange={handleLanguageChange}>
					<option value='uz'>O`zbek</option>
					<option value='en'>English</option>
					<option value='ru'>Русский</option>
				</select>
			</div>
			<Header title={t.title} subtitle={t.subtitle} />
			<BirthDateInput onBirthDateChange={handleBirthDateChange} t={t} />
			{birthDate && (
				<div className='results'>
					<DayCounter birthDate={birthDate} t={t} />
					<MilestoneDates birthDate={birthDate} t={t} />
					<ZodiacSign birthDate={birthDate} t={{ ...t, language }} />
					<DayOfWeek birthDate={birthDate} t={{ ...t, language }} />
					<FunFacts birthDate={birthDate} t={t} language={language} />
				</div>
			)}
		</div>
	)
}

export default App
