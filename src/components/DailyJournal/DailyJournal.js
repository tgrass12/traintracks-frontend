import React, {useState} from 'react';
import NutritionJournal from './NutritionJournal';
import '../../styles/DailyJournal.scss';

let DailyJournal = () => {
	let [date, setDate] = useState(new Date());

	return (
		<div className="daily-journal">
			<NutritionJournal date={date} setDate={setDate}/>

		</div>
	)
}

export default DailyJournal;