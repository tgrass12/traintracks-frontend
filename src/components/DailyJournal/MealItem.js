import React from 'react';
import TrackedNutrients from './TrackedNutrients';

let MealItem = ({food, servings}) => {
	let nutrients = {'cals': food.cals, 'macros': food.macros}
	return (
		<div className='meal-item'>
			<div className='name'>{food.name}</div>
			<span className='servings'>{servings}</span>
			<TrackedNutrients nutrients={nutrients}/>
		</div>
	)
}

export default MealItem;