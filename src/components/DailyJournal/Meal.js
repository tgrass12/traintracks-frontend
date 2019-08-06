import React from 'react';
import MealItem from './MealItem';

let Meal = ({name, foods, loggedValues}) => {
	let mealItems = foods.map(f => {
		return (
			<MealItem
				key={f._id}
				name={f.food.name}
				servings={f.servings}
				calories={f.food.calories}
				macros={f.food.macros}
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
					<div className='logged-values'>
						<span className='calories'>{loggedValues.calories}</span>
						<span className='carbs'>{loggedValues.macros.carbohydrates.total}</span>
						<span className='protein'>{loggedValues.macros.protein}</span>
						<span className='fats'>{loggedValues.macros.fats.total}</span>
					</div>
				</div>
			</div>	
		</div>
	)
}

export default Meal;