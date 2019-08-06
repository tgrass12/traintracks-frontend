import React from 'react';

let MealItem = ({name, servings, calories, macros}) => {

	return (
		<div className='meal-item'>
			<div className='name'>{name}</div>
			<span className='servings'>{servings}</span>
			<div className='nutrition'>
				<span>{calories}</span>
				<span>{macros.carbohydrates.total}</span>
				<span>{macros.protein}</span>
				<span>{macros.fats.total}</span>
			</div>	
		</div>
	)
}

export default MealItem;