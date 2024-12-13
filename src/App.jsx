import { useState } from 'react'
import BirthDateInput from './ components/BirthDateInput/BirthDateInput'
import DayCounter from './ components/DayCounter/DayCounter'
import DayOfWeek from './ components/DayOfWeek/DayOfWeek'
import FunFacts from './ components/FunFacts/FunFacts'
import Header from './ components/Header/Header'
import MilestoneDates from './ components/MilestoneDates/MilestoneDates'
import ZodiacSign from './ components/ZodiacSign/ZodiacSign'
import './App.css'

function App() {
	const [birthDate, setBirthDate] = useState(null)

	const handleBirthDateChange = date => {
		setBirthDate(date)
	}

	return (
		<div className='App'>
			<Header />
			<BirthDateInput onBirthDateChange={handleBirthDateChange} />
			{birthDate && (
				<div className='results'>
					<DayCounter birthDate={birthDate} />
					<MilestoneDates birthDate={birthDate} />
					<ZodiacSign birthDate={birthDate} />
					<DayOfWeek birthDate={birthDate} />
					<FunFacts birthDate={birthDate} />
				</div>
			)}
		</div>
	)
}

export default App
