import React from 'react';

const defaultFood = {
  nutrients: {}
}

let FoodOverview = ({food=defaultFood, setFoodToLog}) => {
	let handleClick = () => {
		setFoodToLog(food._id);
	}

	return (
		<div onClick={handleClick}>
			<span>{food.name}</span>
			<span>{food.nutrients.energy}</span>
		</div>
	)
}

export default FoodOverview;
