import React, { useState } from 'react';
import FoodOverview from './FoodOverview';

let FindFoods = ({setFoodToLog}) => {
	let [foodToFind, setFoodToFind] = useState();
	let [foundFoods, setFoundFoods] = useState([]);

	let handleFoodToFind = (e) => {
		setFoodToFind(e.target.value);
	}

	let findFoods = async (e) => {
		e.preventDefault();
		let relevantFoods = await fetch(`/api/foods?query=${foodToFind}`)
			.then(res => res.json());
		let foods = relevantFoods.map(f => {
			return {
				'id': f._id,
				'name': f.name,
				'cals': f.cals
			}
		});
		setFoundFoods(foods);
	}

	let foundFoodsComponents = foundFoods.map(f => {
		return (
			<FoodOverview 
				key={f.id} 
				food={f} 
				setFoodToLog={setFoodToLog} 
			/>
		)
	});

	return (
		<div>
			<form>
				<label>Find a food</label>
				<input onChange={handleFoodToFind}/>
				<button 
					id="find-food-btn" 
					onClick={findFoods}>
					Find
				 </button>
			</form>
			<div>
				{foundFoodsComponents}
			</div>
		</div>
	)
}

export default FindFoods;