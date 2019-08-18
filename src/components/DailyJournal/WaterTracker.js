import React from 'react';

let WaterTracker = ({addWaterIntake, amount=0}) => {

	return (
		<div className="water-tracker">
			<h3>Water Intake</h3>
			<div className="intake-buttons-container">
				<button className='add-water-intake' value="4" onClick={addWaterIntake}>+4oz</button>
				<button className='add-water-intake' value="8" onClick={addWaterIntake}>+8oz</button>
				<button className='add-water-intake' value="16" onClick={addWaterIntake}>+16oz</button>
				<button className='add-water-intake' value="32" onClick={addWaterIntake}>+32oz</button>
			</div>
			{amount} oz
		</div>
	)
}

export default WaterTracker;