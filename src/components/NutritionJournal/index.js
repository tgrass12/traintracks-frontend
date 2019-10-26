import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
	addToWaterIntake
} from '../../store/actions/nutritionJournal';
import JournalHeader from '../Journal/JournalHeader';
import ComputedNutrients from './ComputedNutrients';
import Meal from './Meal';
import FoodLogger from './FoodLogger';
import FoodDetails from './FoodDetails';
import WaterTracker from './WaterTracker';

let NutritionJournal = ({date, nutrition}) => {
	const dispatch = useDispatch();
	const [selectedFood, setSelectedFood] = useState({});
	const water = nutrition.water;

	useEffect(() => {
			setSelectedFood({});
	},[date]);

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
			"energy": target.energy - logged.energy,
			"totalCarbs": target.totalCarbs - logged.totalCarbs,
			"protein": target.protein - logged.protein,
			"totalFats": target.totalFats - logged.totalFats
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

export default NutritionJournal;
