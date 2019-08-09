import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
	setNutritionTargets,
	setLoggedNutrition,
	setMeals,
	setSelectedFood,
	setWaterIntake,
	addToWaterIntake
} from '../../store/actions/nutritionJournal';
import Header from './Header';
import TrackedNutrients from './TrackedNutrients';
import Meal from './Meal';
import FoodDetails from './FoodDetails';
import WaterTracker from './WaterTracker';
import {formatDateStandard} from '../../shared/util';

let NutritionJournal = () => {
	const dispatch = useDispatch();
	const date = useSelector(state => state.journal.selectedDate);
	const targets = useSelector(state => state.nutritionJournal.targets);
	const logged = useSelector(state => state.nutritionJournal.logged);
	const meals = useSelector(state => state.nutritionJournal.meals);
	const selectedFood = useSelector(state => state.nutritionJournal.selectedFood);
	const water = useSelector(state => state.nutritionJournal.water);

	useEffect(() => {
		let getNutritionJournal = (journalDate) => {
			let dateToFetch = formatDateStandard(journalDate);
			let apiUrl = `/api/users/tyler/journal/${dateToFetch}`;
			return fetch(apiUrl).then(res => res.json());
		}

		getNutritionJournal(date).then(entry => {
			dispatch(setSelectedFood({}));
			dispatch(setMeals(entry.meals));
			dispatch(setNutritionTargets(entry.targets));
			dispatch(setLoggedNutrition(entry.total));
			dispatch(setWaterIntake(entry.water));

		})
	}, [dispatch, date]);

	let handleClick = async (foodId) => {
		let apiUrl = `/api/foods/${foodId}`;
		let foodDetails = await fetch(apiUrl).then(res => res.json());
		dispatch(setSelectedFood(foodDetails));
	}

	let mealComponents = meals.map(m => {
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
			formatDateStandard(date), 
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
						<TrackedNutrients nutrients={logged} />
					</div>
					<div className='journal-targets'>
						<span className='values-label'>Targets</span>
						<TrackedNutrients nutrients={targets} />
					</div>
					<div className='journal-remaining'>
						<span className='values-label'>Remaining</span>
						<TrackedNutrients nutrients={getRemainingNutrients(targets, logged)} />
					</div>
				</div>
			</div>
			<div>
				<FoodDetails food={selectedFood} />
				<WaterTracker addWaterIntake={addWaterIntake} amount={water}/>
			</div>
		</div>
	)
}

export default NutritionJournal;