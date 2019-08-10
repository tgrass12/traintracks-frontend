import React from 'react';

let FoodOverview = ({food, setFoodToLog}) => {

	let handleClick = () => {
		setFoodToLog(food.id);
	}

	return (
		<div onClick={handleClick}>
			<span>{food.name}</span>
			<span>{food.cals}</span>
		</div>
	)
}

export default FoodOverview;