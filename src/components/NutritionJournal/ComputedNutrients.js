import React from 'react';
import TrackedNutrients from './TrackedNutrients';

let ComputedNutrients = ({label, nutrients}) => {
	return (
		<div className='computed-nutrients'>
			<span className='values-label'>{label}</span>
			<div className='nutrient-values'>
				<TrackedNutrients nutrients={nutrients} />
			</div>
		</div>
	)
}

export default ComputedNutrients;