import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FoodFinder from './FoodFinder';
import LogFoodForm from './LogFoodForm';
import { updateNutrition } from '../../store/actions/nutritionJournal';
import { formatDateStandard } from '../../shared/util';

const FoodLogger = ({currentMeal, hideModal}) => {
	const dispatch = useDispatch();
	const journalDate = useSelector(state => state.journal.selectedDate);
	const meals = useSelector(state => state.journal[journalDate].nutrition.meals);
	const user = useSelector(state => state.user.data.username);
	const [foodToLog, setFoodToLog] = useState();

	const logFood = async (meal, servings) => {
		const date = formatDateStandard(journalDate);
		const apiUrl = `/api/users/${user}/journal/${date}?meal=${meal}`;
		if (foodToLog && servings > 0) {
			const payload = {
				'food': foodToLog,
				'servings': servings
			}

			await fetch(apiUrl, {
				method: 'POST',
				body: JSON.stringify(payload),
				headers: {
					'Content-Type': 'application/json'
				}
			}).then(res => res.json())
			.then(nutrition => {
				dispatch(updateNutrition(date, nutrition));
			});

			if (hideModal) hideModal();
		}
	}

	const mealNames = meals.map(m => m.name);

	return (
		<div className='log-food'>
			<h4> Log Food </h4>
			<FoodFinder setFoodToLog={setFoodToLog}/>
			<LogFoodForm 
				currentMeal={currentMeal} 
				meals={mealNames} 
				logFood={logFood}
				food={foodToLog} 
			/>
		</div>
	)
}

export default FoodLogger;