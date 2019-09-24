import React from 'react';
import ProgressTracker from '../ProgressTracker';

let NutritionDash = ({items=[], handleNav}) => {
	const onNavigate = () => {
		handleNav('/journal');
	} 

	const trackerComponents = items.map(i => {
		return (<ProgressTracker
			key={i.label}
			label={i.label.toUpperCase()}
			current={i.logged}
			target={i.target}
		/>);
	});

	return (
		<div className="dashboard-section">
			{trackerComponents}
			<div className="nutrition-dashboard-actions">
				<button 
					id="dashboard-nutrition-journal-btn"
					onClick={onNavigate}>
					View in Journal
				</button>
			</div>
		</div>
	)
}

export default NutritionDash;