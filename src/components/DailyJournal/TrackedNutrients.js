import React from 'react';

let defaultNutrients = {
	"cals": 0,
	"macros": {
		"carbs": {
			"total": 0
		},
		"protein": 0,
		"fats": {
			"total": 0
		}
	}
}

let TrackedNutrients = ({nutrients=defaultNutrients, servings}) => {
	let {cals, macros} = nutrients;
	return (
		<div className='logged-nutrients-total'>
			<span>{servings}</span>
			<span>{cals}</span>
			<span>{macros.carbs.total}</span>
			<span>{macros.protein}</span>
			<span>{macros.fats.total}</span>
		</div>	
	)
}

export default TrackedNutrients;