import React from 'react';
import '../../styles/ProgressTracker.scss';

let ProgressTracker = ({itemName, current, target}) => {
	let percentage = Math.round(current / target * 1000) / 10;
	return (
		<div className="progress-tracker-card">
			<div className="progress-percentage">
				{percentage}%
			</div>
			<span className="progress-values">{current}/{target} </span>
			<div className="progress-item-name">{itemName}</div>
		</div>
	);
}

export default ProgressTracker;