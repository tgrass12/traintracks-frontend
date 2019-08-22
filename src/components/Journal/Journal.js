import React from 'react';
import NutritionJournal from '../NutritionJournal/NutritionJournal';
import '../../styles/DailyJournal.scss';

let DailyJournal = () => {
	return (
		<div className="daily-journal">
			<NutritionJournal/>
		</div>
	)
}

export default DailyJournal;