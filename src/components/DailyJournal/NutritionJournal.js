import React, {useState, useEffect} from 'react';
import Meal from './Meal';
import {formatDateStandard} from '../../shared/util';

let NutritionJournal = ({date}) => {
	let [meals, setMeals] = useState([]);
	let [targets, setTargets] = useState();
	let [totals, setTotals] = useState();

	let getNutritionJournal = (journalDate) => {
		let dateToFetch = formatDateStandard(journalDate);
		let apiUrl = `/api/users/tyler/journal?date=${dateToFetch}`;
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

	return (
		<div className='nutrition-journal'>
			<div className='journal-meals'>
				{mealComponents}
			</div>
			<div className='journal-values'>
				{ totals && 	
					<div className='journal-logged'>
						<span className='values-label'>Logged</span>
						<div className='journal-logged-values'>
							<span>{totals.calories}</span>
							<span>{totals.macros.carbohydrates.total}</span>
							<span>{totals.macros.protein}</span>
							<span>{totals.macros.fats.total}</span>
						</div>
					</div>
				}
				{ targets && 
					<div className='journal-targets'>
						<span className='values-label'>Targets</span>
						<div className='journal-target-values'>
							<span>{targets.calories}</span>
							<span>{targets.macros.carbohydrates.total}</span>
							<span>{targets.macros.protein}</span>
							<span>{targets.macros.fats.total}</span>					
						</div>
					</div>
				}
				{ targets && totals &&
					<div className='journal-remaining'>
						<span className='values-label'>Remaining</span>
						<div className='journal-remaining-values'>
							<span>{targets.calories - totals.calories}</span>
							<span>{targets.macros.carbohydrates.total - totals.macros.carbohydrates.total}</span>
							<span>{targets.macros.protein - totals.macros.protein}</span>
							<span>{targets.macros.fats.total - totals.macros.fats.total}</span>	
						</div>
					</div>
				}
			</div>
		</div>
	)
}

export default NutritionJournal;