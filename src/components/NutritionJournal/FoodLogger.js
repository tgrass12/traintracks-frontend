import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FoodFinder from './FoodFinder';
import LogFoodForm from './LogFoodForm';
import { fetchJournal } from '../../store/actions/journal';
import { formatDateStandard } from '../../shared/util';

let FoodLogger = ({hideModal}) => {
	let dispatch = useDispatch();
	let journalDate = useSelector(state => state.journal.selectedDate);
	let meals = useSelector(state => state.journal[journalDate].nutrition.meals);
	let [foodToLog, setFoodToLog] = useState();

	let logFood = async (meal, servings) => {
		let date = formatDateStandard(journalDate);
		let apiUrl = `/api/users/tyler/journal/${date}?meal=${meal}`;
		if (foodToLog && servings > 0) {
			let payload = {
				'food': foodToLog,
				'servings': servings
			}
			await fetch(apiUrl, {
				method: 'POST',
				body: JSON.stringify(payload),
				headers: {
					'Content-Type': 'application/json'
				}
			}).then(res => res.json());

			//TODO: this is dirty, only replace relevant components
			dispatch(fetchJournal(date));
			if (hideModal) hideModal();
		}
	}

	const mealNames = meals.map(m => m.name);

	return (
		<div className='log-food'>
			<h4> Log Food </h4>
			<FoodFinder setFoodToLog={setFoodToLog}/>
			<LogFoodForm food={foodToLog} meals={mealNames} logFood={logFood}/>
		</div>
	)
}

export default FoodLogger;