import React from 'react';
import MealItem from './MealItem';
import TrackedNutrients from './TrackedNutrients';

let Meal = ({name, foods=[], loggedValues}) => {
	let mealItems = foods.map(f => {
		return (
			<MealItem
				key={f._id}
				food={f.food}
				servings={f.servings}
			/>
		)
	});
	return (
		<div className='meal'>
			<div className='meal-header'>
				<div className='meal-name'>{name}</div>
				<div className='meal-labels'>
					<span className='servings'>Servings</span>
					<span className='calories'>Calories</span>
					<span className='carbs'>Carbs</span>
					<span className='protein'>Protein</span>
					<span className='fats'>Fats</span>
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
					<TrackedNutrients nutrients={loggedValues} />
				</div>
			</div>	
		</div>
	)
}

export default Meal;