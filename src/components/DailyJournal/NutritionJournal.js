import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import queryString from 'query-string';
import {
	addToWaterIntake,
	fetchJournal,
	setSelectedDate
} from '../../store/actions/journal';
import Header from './Header';
import TrackedNutrients from './TrackedNutrients';
import Meal from './Meal';
import LogFood from './LogFood';
import FoodDetails from './FoodDetails';
import WaterTracker from './WaterTracker';
import { isValidDateString } from '../../shared/util';

let NutritionJournal = ({location}) => {
	const dispatch = useDispatch();
	const date = useSelector(state => state.journal.selectedDate);
	const nutrition = useSelector(state => state.journal.nutrition);
	const [selectedFood, setSelectedFood] = useState({});
	const water = useSelector(state => state.journal.nutrition.water);

	useEffect(() => {
		let dateStr = queryString.parse(location.search).date;
		if (isValidDateString(dateStr)) {
			dispatch(setSelectedDate(dateStr));
		}
	}, [dispatch, location.search]);

	useEffect(() => {
		dispatch(fetchJournal(date));
		setSelectedFood({});
	}, [dispatch, date]);

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
		<div className="journal-container">
			<div className='nutrition-journal'>
				<Header/>
				<div className='journal-meals'>
					{mealComponents}
				</div>
				<div className='journal-values'>
					<div className='journal-logged'>
						<span className='values-label'>Logged</span>
						<TrackedNutrients nutrients={nutrition.logged} />
					</div>
					<div className='journal-targets'>
						<span className='values-label'>Targets</span>
						<TrackedNutrients nutrients={nutrition.targets} />
					</div>
					<div className='journal-remaining'>
						<span className='values-label'>Remaining</span>
						<TrackedNutrients nutrients={getRemainingNutrients(nutrition.targets, nutrition.logged)} />
					</div>
				</div>
			</div>
			<div>
				<FoodDetails food={selectedFood} />
				<WaterTracker addWaterIntake={addWaterIntake} amount={water}/>
			</div>
			<div className="journal-additional-actions">
				<LogFood meals={nutrition.meals.map(m => m.name)} /> 
			</div>
		</div>
	)
}

export default withRouter(NutritionJournal);