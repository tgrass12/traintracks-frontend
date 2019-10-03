import React, { useState } from 'react';

let LogFoodForm = ({currentMeal, meals=[], logFood}) => {
	let [servings, setServings] = useState(1);
	let [selectedMeal, setSelectedMeal] = useState(currentMeal || meals[0]);

	let handleSelectedMeal = (e) => {
		setSelectedMeal(e.target.value);
	}

	let handleServingsChange = (e) => {
		setServings(Number(e.target.value));
	}

	let handleLogFood = (e) => {
		e.preventDefault();
		logFood(selectedMeal, servings);
	}

	let mealOptions = meals.map(m => 
		<option key={m} value={m}>{m}</option> 
	);

	return (
		<form>
			<div>
				<label> Add to... </label>
				<select value={selectedMeal} onChange={handleSelectedMeal}>
					{mealOptions}
				</select>
				<label>Servings </label>
				<input 
					type='number' 
					value={servings} 
					onChange={handleServingsChange}
				/>
			</div>
			<button 
				id="log-food-btn"
				onClick={handleLogFood}>
				Log
			</button>
		</form>
	)
}

export default LogFoodForm;