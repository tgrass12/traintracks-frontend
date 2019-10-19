import React, { useState, useReducer } from 'react';
import './MultistepForm.scss';

const reducer = (state, action) => {
	return Object.assign(state, action);
};

const MultistepForm = (Components=[], onSubmit) => {
	Components.push(FormConfirmation);
	const [currentStep, setCurrentStep] = useState(0);
	const [state, dispatch] = useReducer(reducer, {});

	const submitForm = (e) => {
		const dataToSubmit = {...state};
		for (let prop in dataToSubmit) {
			if (dataToSubmit[prop] === undefined) {
				delete dataToSubmit[prop];
			}
		}
		e.preventDefault();
		onSubmit(dataToSubmit);
	}

	const nextStep = () => {
		setCurrentStep(currentStep + 1);
	}

	const prevStep = () => {
		setCurrentStep(currentStep - 1);
	}

	const handleUpdate = (formData) => {
		dispatch(formData);
	}

	const ActiveComponent = Components[currentStep];

	return () => (
		<div className='flex-container-centered'>
			<form className='multistep-form'>	
				<ActiveComponent
					fields={state}
					prev={prevStep}
					next={nextStep}
					handleUpdate={handleUpdate}
					submit={submitForm}
				/>
			</form>
		</div>
	)

}

const FormConfirmation = ({fields={}, prev, submit}) => {
	let fieldComponents = [];

	for (let f in fields) {
		fieldComponents.push(
			<p key={f}>
				{f} : {fields[f]}
			</p>
		);
	}

	return (
		<div>
			{fieldComponents}
			<div>
				<button 
					id='prev'
					type='button'
					onClick={prev}
				>
					Go Back
				</button>
				<button
					id='submit'
					type='submit'
					onClick={submit}
				>
					Submit
				</button>
			</div>
		</div>
	)
}

export default MultistepForm;
export { FormConfirmation };