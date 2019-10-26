import React from 'react';

let defaultNutrients = {
	"energy": 0,
	"totalCarbs": 0,
	"protein": 0,
	"totalFats": 0
}

let TrackedNutrients = ({nutrients=defaultNutrients, servings}) => {
	return (
		<div className='logged-nutrients-total'>
			<span>{servings}</span>
			<span>{nutrients.energy}</span>
			<span>{nutrients.totalCarbs}</span>
			<span>{nutrients.protein}</span>
			<span>{nutrients.totalFats}</span>
		</div>
	)
}

export default TrackedNutrients;
