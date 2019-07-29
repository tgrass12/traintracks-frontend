import React, {useState} from 'react';

let CustomMaxSelector = ({handleMaxChange}) => {
	let [max, setMax] = useState(0);

	let handleChange = (e) => {
		setMax(e.target.value);
	};

	let handleCustomMax = () => {
		handleMaxChange(max);
	}

	return (
		<div>
			<input 
				id="max-value" 
				name="max"
				onChange={handleChange}
			/> 
			<button type="submit" onClick={handleCustomMax}>
				View
			</button>
		</div>
	)
}

export default CustomMaxSelector