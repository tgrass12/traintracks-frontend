import React, {useState, useEffect} from 'react';
import TrackedNutrients from './TrackedNutrients';
import Meal from './Meal';
import {formatDateStandard} from '../../shared/util';

let NutritionJournal = ({date}) => {
	let [meals, setMeals] = useState([]);
	let [targets, setTargets] = useState();
	let [totals, setTotals] = useState();

	let getNutritionJournal = (journalDate) => {
		let dateToFetch = formatDateStandard(journalDate);
		let apiUrl = `/api/users/tyler/journal/${dateToFetch}`;
		return fetch(apiUrl).then(res => res.json());
	}

	useEffect(() => {
		getNutritionJournal(date).then(entry => {
			setMeals(entry.meals);
			setTargets(entry.targets);
			setTotals(entry.total);

		})
	}, [date]);

	let mealComponents = meals.map(m => {
		return (
			<Meal
				key={m.name} 
				name={m.name} 
				foods={m.foods} 
				loggedValues={m.total}
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

	return (
		<div className='nutrition-journal'>
			<div className='journal-meals'>
				{mealComponents}
			</div>
			<div className='journal-values'>
				<div className='journal-logged'>
					<span className='values-label'>Logged</span>
					<TrackedNutrients nutrients={totals} />
				</div>
				<div className='journal-targets'>
					<span className='values-label'>Targets</span>
					<TrackedNutrients nutrients={targets} />
				</div>
				<div className='journal-remaining'>
					<span className='values-label'>Remaining</span>
					<TrackedNutrients nutrients={getRemainingNutrients(targets, totals)} />
				</div>
			</div>
		</div>
	)
}

export default NutritionJournal;