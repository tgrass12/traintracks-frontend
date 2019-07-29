import React from 'react';

let RepMaxRow = ({percentage, weight}) => (

	<div className="rep-table-row">
		<div className="rep-table-percentage">{percentage}%</div>
		<div className="rep-table-weight">{weight}</div>
	</div>
);

export default RepMaxRow;