import React, {useState} from 'react';
import RepMaxTable from './RepMaxTable';
import MaxSelector from './MaxSelector';
import '../../styles/RepTable.css';

let RepMaxContainer = () => {

	let defaultMaxes = {
		'squat': 405,
		'bench': 225,
		'deadlift': 500
	};

	let clearSelectedMax = () => {
		let lastActive = document.querySelector('.active-max');
		if (lastActive) {
			lastActive.classList.remove('active-max');
		}
	}

	let handleMaxChange = (newMax) => {
		clearSelectedMax();
		setCurrentMax(newMax);
	}

	let [maxes, addMax] = useState(defaultMaxes);
	let [currentMax, setCurrentMax] = useState(0);

	return (
		<div className='rep-table-container'>
			<MaxSelector 
				maxes={maxes} 
				handleMaxChange={handleMaxChange}
			/>
			<RepMaxTable currentMax={currentMax}/>
		</div>
	)
}

export default RepMaxContainer;