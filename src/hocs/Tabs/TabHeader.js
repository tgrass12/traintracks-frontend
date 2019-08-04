import React from 'react';
import {snakeCase} from '../../shared/util'
let TabHeader = ({label, isActive, setActiveItem}) => {
	let id = snakeCase(label + '-label');
	let handleClick = function(e) {
		setActiveItem(snakeCase(label));
	}

	return (
		<div id={id} 
			className={
				`tab
				${isActive ? 'active': ''}`
			}
			onClick={handleClick}>
			<span>{label}</span>
		</div>
	)
}

export default TabHeader;