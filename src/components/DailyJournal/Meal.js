import React from 'react';
import MealItem from './MealItem';
import TrackedNutrients from './TrackedNutrients';

let Meal = ({name, foods=[], loggedValues, handleClick}) => {
	let mealItems = foods.map(f => {
		return (
			<MealItem
				key={f._id}
				food={f.food}
				servings={f.servings}
				handleClick={handleClick}
			/>
		)
	});
	return (
		<div className='meal'>
			<div className='meal-header'>
				<div className='meal-name'>{name}</div>
				<div className='meal-labels'>
					<span>Servings</span>
					<span>Calories</span>
					<span>Carbs</span>
					<span>Protein</span>
					<span>Fats</span>
				</div>
			</div>
			<div className='meal-contents'>
				<div className='items'>
					{mealItems}
				</div>
				<div className='meal-footer'>
					<div className='meal-actions'>
						<button> Add foods </button>
					</div>
					<div className='meal-logged-total'>
						<TrackedNutrients nutrients={loggedValues} />
					</div>
				</div>	
			</div>	
		</div>
	)
}

export default Meal;