import React, {useState, useEffect} from 'react';
import RepMaxRow from './RepMaxRow';

let RepMaxTable = ({currentMax}) => {
	let [percentages, setPercentages] = useState([]);

	useEffect(() => {
		getPercentages();
	});

	let mapPercentages = () => {
		return 	percentages.map(r => (
					<RepMaxRow key={r.percentage}
						percentage={r.percentage}
						weight={r.weight}
					/>
				)) 
	}

	let getPercentages = () => {
		let percentages = [];
		for (let i = 100; i > 0; i -= 5) {
			percentages.push( 
				{percentage: i, weight: Math.floor(currentMax * i / 100)}
			);
		}
		setPercentages(percentages);
	}

	return (
		<div className="rep-table">
			{percentages.length > 0 && (
				<h1> 1RM:{percentages[0].weight} </h1>
				)}
			<div className="rep-table-values">
				{ mapPercentages() }
			</div>
		</div>
	);
}

export default RepMaxTable;