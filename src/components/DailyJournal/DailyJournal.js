import React, {useState} from 'react';
import Header from './Header';
import NutritionJournal from './NutritionJournal';
import '../../styles/DailyJournal.scss';

let DailyJournal = () => {
	let [date, setDate] = useState(new Date());

	return (
		<div className="daily-journal">
			<Header date={date} setDate={setDate}/>
			<NutritionJournal date={date}/>

		</div>
	)
}

export default DailyJournal;