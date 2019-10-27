import React, { useState, useReducer } from 'react';
import './MultistepForm.scss';

const reducer = (state, action) => {
	return Object.assign(state, action);
};

const MultistepForm = (Components=[], onSubmit, submitText) => {
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
					submitText={submitText}
				/>
			</form>
		</div>
	)

}

const FormConfirmation = ({fields={}, prev, submit, submitText='Submit'}) => {
	let fieldComponents = [];

	for (let f in fields) {
		fieldComponents.push(
			<div key={f}>
				{f}: {fields[f]}
			</div>
		);
	}

	return (
		<div className='form-section'>
			<h2 className='form-header'>Review</h2>
			<div className='form-contents'>
				{fieldComponents}
			</div>
			<div className='form-buttons flex-centered'>
				<button
					id='prev'
					type='button'
					className='form-input__button-go-back'
					onClick={prev}
				>
					Go Back
				</button>
				<button
					id='submit'
					type='submit'
					className='form-input__button-save-continue'
					onClick={submit}
				>
					{submitText}
				</button>
			</div>
		</div>
	)
}

export default MultistepForm;
export { FormConfirmation };
