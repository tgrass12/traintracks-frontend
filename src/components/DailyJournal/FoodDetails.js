import React from 'react';

let FoodDetails = ({food}) => {

	return (
		<div className="food-details">
			<div className="food-details-header">
				Food Details
			</div>
			{food &&
				food.name
			}
		</div>
	)
}

export default FoodDetails;