import React from 'react';
import TrackedNutrients from './TrackedNutrients';

let MealItem = ({food, servings, handleClick}) => {
	let nutrients = {'cals': food.cals, 'macros': food.macros}

	let onClick = () => {
		handleClick(food._id);
	}
	
	return (
		<div className='meal-item' onClick={onClick}>
			<div className='name'>{food.name}</div>
			<span className='servings'>{servings}</span>
			<TrackedNutrients nutrients={nutrients}/>
		</div>
	)
}

export default MealItem;