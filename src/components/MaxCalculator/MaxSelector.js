import React from 'react';
import LiftMax from './LiftMax';
import CustomMaxSelector from './CustomMaxSelector';

let MaxSelector = ({maxes, handleMaxChange}) => {
	let handleClick = (e) => {
		handleMaxChange(maxes[e.target.textContent]);
		e.target.classList.add('active-max');
	}

	let generateLiftComponents = () => {
		let components = Object.keys(maxes).map(l => (
			<LiftMax 
				key={l}
				lift={l} 
				weight={maxes[l]}
				handleClick={handleClick}
			/>
		));

		return components;
	};

	return (
		<div className="max-lift-selector">
			<CustomMaxSelector handleMaxChange={handleMaxChange}/>
			{generateLiftComponents()}
		</div>
	)
};

export default MaxSelector;