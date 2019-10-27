import React, { useState } from 'react';
import './NutrientGoals.scss';

let NutrientGoals = ({handleUpdate, prev, next, fields={}}) => {
	const [energy, setEnergy] = useState(fields.energy || 2000);
	const [carbs, setCarbs] = useState(fields.carbs || 250);
	const [protein, setProtein] = useState(fields.protein || 190);
	const [fats, setFats] = useState(fields.fats || 60);
	const [allowContinue, setAllowContinue] = useState(true);

	const handleClick = (e) => {
		e.preventDefault();
		if (e.target.name === 'skip') {
			handleUpdate({
				energy: fields.energy || 2000,
				carbs: fields.carbs || 250,
				protein: fields.protein || 190,
				fats: fields.fats || 60
			});
		}
		else {
			handleUpdate({
				energy,
				carbs,
				protein,
				fats
			});
		}

		next();
	}

	const checkFieldsValidity = (newVal) => {
		const shouldAllowContinue = newVal >= 0 &&
			energy >= 0 &&
			carbs >= 0 &&
			fats >= 0 &&
			protein >= 0;

		setAllowContinue(shouldAllowContinue);
	}

	const handleChange = (e) => {
		checkFieldsValidity(Number(e.target.value));
		switch(e.target.name) {
			case 'energy':
				setEnergy(Number(e.target.value));
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
					<label htmlFor='nutrition-goals-energy'>
						Energy
					</label>
					<input
						id='nutrition-goals-energy'
						type='number'
						name='energy'
						min='0'
						defaultValue={energy}
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
