import React from 'react';
import TrackedNutrients from './TrackedNutrients';

let MealItem = ({food={}, servings, handleClick}) => {
	let nutrients = {'cals': food.cals, 'macros': food.macros}

	let onClick = () => {
		handleClick(food._id);
	}
	
	return (
		<div className='meal-item' onClick={onClick}>
			<div className='meal-item-name'>{food.name}</div>
			<div className='meal-item-values'>
				<TrackedNutrients servings={servings} nutrients={nutrients} />
			</div>
		</div>
	)
}

export default MealItem;