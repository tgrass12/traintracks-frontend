import React, { useState } from 'react';
import './UserDetails.scss';

let UserDetails = ({handleUpdate, next, fields={}}) => {
	const [name, setName] = useState(fields.name);
	const [age, setAge] = useState(fields.age);
	const [sex, setSex] = useState(fields.sex);
	const [allowContinue, setAllowContinue] = useState(true);

	const handleClick = (e) => {
		e.preventDefault();
		if (e.target.name === 'skip') {
			handleUpdate({
				name: fields.name,
				age: fields.age,
				sex: fields.sex
			});
		}
		else {
			handleUpdate({
				name,
				age,
				sex
			});
		}

		next();
	}

	const handleChange = (e) => {
		switch(e.target.name) {
			case 'name':
				setName(e.target.value);
				break;
			case 'age':
				setAllowContinue(
					Number(e.target.value) > 0 || 
					e.target.value === '' 
				);
				setAge(Number(e.target.value));
				break;
			case 'sex':
				setSex(e.target.value);
				break;
			default:
				break;
		}
	}

	return (
		<div className='form-section'>
			<h2 className="form-header">Basic Information</h2>
			<div className='form-contents'>
				<div className='form-input__text'>
					<label htmlFor='user-info-name'>
						Name
					</label>
					<input
						id='user-info-name'
						type='text'
						name='name'
						placeholder='Name'
						onChange={handleChange}
						defaultValue={name}
					/>
				</div>
				<div className='form-input__number'>
					<label htmlFor='user-info-age'>
						Age
					</label>
					<input
						id='user-info-age'
						type='number'
						min='1'
						name='age'
						placeholder='Age'
						onChange={handleChange}
						defaultValue={age}
					/>				
				</div>
				<div className='form-input__radio'>
					<label className='form-input__radio-label'>Sex</label>
					<div className='form-input__radio-options'>				
							<input 
								id='sex-male'
								type='radio' 
								name='sex'
								onChange={handleChange}
								value='Male'
								checked={sex === 'Male'}
							/>
						<label htmlFor='sex-male'>
							Male
						</label>
						<br/>
							<input 
								id='sex-female'
								type='radio' 
								name='sex'
								onChange={handleChange}
								value='Female'
								checked={sex === 'Female'}
							/>
						<label htmlFor='sex-female'>
							Female
						</label>
						<br/>
							<input
								id='sex-not-specified'
								type='radio' 
								name='sex'
								onChange={handleChange}
								value='Prefer not to say'
								checked={sex === 'Prefer not to say'}
							/>
						<label htmlFor='sex-not-specified'>
							Prefer not to say
						</label>
						<br/>
					</div>
				</div>
			</div>
			<button
				name='skip'
				type='button'
				className='form-input__button-skip'
				onClick={handleClick}
			>
				Skip
			</button>
			<button 
				type='submit' 
				className={allowContinue ? 
					'form-input__button-save-continue' :
					'form-input__button-save-continue--disabled'
				}
				disabled={!allowContinue}
				onClick={handleClick}
			>
				Save and Continue
			</button>
		</div>
	)
}

export default UserDetails;