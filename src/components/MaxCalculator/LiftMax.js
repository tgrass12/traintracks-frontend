import React from 'react';

let LiftMax = ({lift, weight, handleClick}) => (
	<div className="max-option" onClick={handleClick}>
		{lift}
	</div>
);

export default LiftMax;