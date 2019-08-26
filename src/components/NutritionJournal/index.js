import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import queryString from 'query-string';
import {
	addToWaterIntake,
	fetchJournal,
} from '../../store/actions/journal';
import JournalHeader from '../Journal/JournalHeader';
import ComputedNutrients from './ComputedNutrients';
import Meal from './Meal';
import FoodLogger from './FoodLogger';
import FoodDetails from './FoodDetails';
import WaterTracker from './WaterTracker';
import { isValidDateString } from '../../shared/util';

let NutritionJournal = ({location}) => {
	const dispatch = useDispatch();
	const date = useSelector(state => state.journal.selectedDate);
	const nutrition = useSelector(state => state.journal[date].nutrition);
	const water = useSelector(state => state.journal[date].nutrition.water);
	const [selectedFood, setSelectedFood] = useState({});

	useEffect(() => {
		let dateStr = queryString.parse(location.search).date || date;
		if (isValidDateString(dateStr)) {
			dispatch(fetchJournal(dateStr));
			setSelectedFood({});
		}
	}, [dispatch, date, location.search]);

	let handleClick = async (foodId) => {
		let apiUrl = `/api/foods/${foodId}`;
		let foodDetails = await fetch(apiUrl).then(res => res.json());
		setSelectedFood(foodDetails);
	}

	let mealComponents = nutrition.meals.map(m => {
		return (
			<Meal
				key={m.name} 
				name={m.name} 
				foods={m.foods} 
				loggedValues={m.total}
				handleClick={handleClick}
			/>
		);
	});

	//TODO: Expand this for customizably tracked nutrients
	let getRemainingNutrients = function(target, logged) {
		if (logged == null) return target;
		return {
			"cals": target.cals - logged.cals,
			"macros": {
				"carbs": { 
					"total": target.macros.carbs.total - logged.macros.carbs.total 
				},
				"protein": target.macros.protein - logged.macros.protein,
				"fats": {
					"total": target.macros.fats.total - logged.macros.fats.total
				}
			}
		}
	}

	let addWaterIntake = (e) => {
		dispatch(addToWaterIntake(
			date, 
			Number(e.target.value)
			)
		);
	}

	return (
		<div className='nutrition-journal-container'>
			<div className="nutrition-logger">
				<JournalHeader />
				<div className='nutrition-journal'>
					<div className='journal-meals'>
						{mealComponents}
					</div>
					<div className='journal-values'>
						<ComputedNutrients 
							label="Logged" 
							nutrients={nutrition.logged} 
						/>
						<ComputedNutrients 
							label="Targets" 
							nutrients={nutrition.targets} 
						/>
						<ComputedNutrients 
							label="Remaining" 
							nutrients={
								getRemainingNutrients(
									nutrition.targets, 
									nutrition.logged
								)
							} 
						/>
					</div>
				</div>
			</div>
		<div className="daily-details">
				<FoodDetails food={selectedFood} />
				<WaterTracker addWaterIntake={addWaterIntake} amount={water}/>
			</div>
			<div className="journal-additional-actions">
				<FoodLogger meals={nutrition.meals.map(m => m.name)} /> 
			</div>
		</div>
	)
}

export default withRouter(NutritionJournal);