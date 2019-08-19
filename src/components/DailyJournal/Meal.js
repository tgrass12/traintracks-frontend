import React, { useState } from 'react';
import Modal from '../../hocs/Modal/Modal';
import MealItem from './MealItem';
import LogFood from './LogFood';
import TrackedNutrients from './TrackedNutrients';

let Meal = ({name, foods=[], loggedValues, handleClick}) => {
	let [isModalVisible, setIsModalVisible] = useState(false);

	const displayModal = () => {
		setIsModalVisible(true);
	}

	const hideModal = () => {
		setIsModalVisible(false);
	}

	let mealItems = foods.map(f => {
		return (
			<MealItem
				key={f._id}
				food={f.food}
				servings={f.servings}
				handleClick={handleClick}
			/>
		)
	});

	const LogFoodModal = Modal(
		LogFood, 
		isModalVisible,
		hideModal,
		{meals: [name]}
	);

	return (
		<div className='meal'>
			<div className='meal-header'>
				<div className='meal-name'>{name}</div>
				<div className='meal-labels'>
					<span>Servings</span>
					<span>Calories</span>
					<span>Carbs</span>
					<span>Protein</span>
					<span>Fats</span>
				</div>
			</div>
			<div className='meal-contents'>
				<div className='items'>
					{mealItems}
				</div>
				<div className='meal-footer'>
					<div className='meal-actions'>
						<button onClick={displayModal}> Add foods </button>
					</div>
					<div className='meal-logged-total'>
						<TrackedNutrients nutrients={loggedValues} />
					</div>
				</div>	
			</div>
			{LogFoodModal}
		</div>
	)
}

export default Meal;