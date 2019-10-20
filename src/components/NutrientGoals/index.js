import React, { useState } from 'react';
import './NutrientGoals.scss';

let NutrientGoals = ({handleUpdate, prev, next, fields={}}) => {
	const [calories, setCalories] = useState(fields.calories || 2000);
	const [carbs, setCarbs] = useState(fields.carbs || 250);
	const [protein, setProtein] = useState(fields.protein || 190);
	const [fats, setFats] = useState(fields.fats || 60);
	const [allowContinue, setAllowContinue] = useState(true);

	const handleClick = (e) => {
		e.preventDefault();
		if (e.target.name === 'skip') {
			handleUpdate({
				calories: fields.calories,
				carbs: fields.carbs,
				protein: fields.protein,
				fats: fields.fats
			});
		} 
		else {
			handleUpdate({
				calories,
				carbs,
				protein,
				fats
			});
		}

		next();
	}

	const checkFieldsValidity = (newVal) => {
		const shouldAllowContinue = newVal >= 0 &&
			calories >= 0 &&
			carbs >= 0 &&
			fats >= 0 &&
			protein >= 0;

		setAllowContinue(shouldAllowContinue);
	}

	const handleChange = (e) => {
		checkFieldsValidity(Number(e.target.value));
		switch(e.target.name) {
			case 'calories':
				setCalories(Number(e.target.value));
				return;
			case 'carbs':
				setCarbs(Number(e.target.value));
				return;
			case 'fats':
				setFats(Number(e.target.value));
				return;
			case 'protein':
				setProtein(Number(e.target.value));
				return;
			default:
				return;
		}
	}

	return (
		<div className='form-section'>	
			<h2 className='form-header'>Nutrition Goals</h2>
			<div className='form-contents'>
				<div className='form-input__text'>
					<label htmlFor='nutrition-goals-calories'>
						Calories
					</label>
					<input
						id='nutrition-goals-calories'
						type='number'
						name='calories'
						min='0'
						defaultValue={calories}
						onChange={handleChange}
					/>
				</div>
				<div className='form-input__text'>
					<label htmlFor='nutrition-goals-carbs'>Carbs</label>
					<input
						id="nutrition-goals-carbs"
						type='number'
						name='carbs'
						min='0'
						defaultValue={carbs}
						onChange={handleChange}
					/>
				</div>
				<div className='form-input__text'>
					<label htmlFor='nutrition-goals-protein'>Protein</label>
					<input
						id='nutrition-goals-protein'
						type='number'
						name='protein'
						min='0'
						defaultValue={protein}
						onChange={handleChange}
					/>
				</div>
				<div className='form-input__text'>
					<label htmlFor='nutrition-goals-fats'>Fats</label>
					<input
						id='nutrition-goals-fats'
						type='number'
						name='fats'
						min='0'
						defaultValue={fats}
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className='form-buttons'>			
				<button
					type='button'
					className='form-input__button-go-back auto-margin-right'
					onClick={prev}
				>
					Go Back
				</button>
				<button
					name='skip'
					type='button'
					className='form-input__button-skip'
					onClick={handleClick}
				>
					Skip
				</button>
				<button
					className={ allowContinue ?
						'form-input__button-save-continue' :
						'form-input__button-save-continue--disabled'
					}
					type='submit'
					onClick={handleClick}
					disabled={!allowContinue}
				>
					Save and Continue
				</button>
			</div>
		</div>
	)
}

export default NutrientGoals;