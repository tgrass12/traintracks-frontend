import React, { useState, useEffect } from 'react';
import '../../styles/Auth.scss';

let Auth = ({isRegister, onAuth}) => {
	const formHeaderText = isRegister ? 'Join Today' : 'Welcome Back';
	const formButtonText = isRegister ? 'Register': 'Sign in';
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isEmailValid, setIsEmailValid] = useState(!isRegister);
	const [isPasswordValid, setIsPasswordValid] = useState(false);
	const [isUsernameValid, setIsUsernameValid] = useState(false);

	const isFormValid = isEmailValid && 
		isPasswordValid && 
		isUsernameValid;

	//TODO: Set Form Validity checks/displays

	useEffect(() => {
		setEmail('');
		setIsEmailValid(!isRegister);
		setIsPasswordValid(validatePassword(password));
		setIsUsernameValid(validateUsername(username));
	},[isRegister]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (isFormValid) {
			onAuth(username, password, email);
		}
	}

	const validatePassword = (password) => {
		return isRegister ? password.length > 6 : password.length > 0;
	}

	const validateUsername = (username) => {
		return isRegister ? username.length > 2 : username.length > 0;
	}

	const validateEmail = (emailInput) => {
		return isRegister ? emailInput.checkValidity() : true;
	}

	const handleChange = (e) => {
		switch(e.target.name) {
			case 'email':
				setEmail(e.target.value);
				setIsEmailValid(validateEmail(e.target));
				return;
			case 'username':
				setUsername(e.target.value);
				setIsUsernameValid(validateUsername(e.target.value));
				return;
			case 'password':
				setPassword(e.target.value);
				setIsPasswordValid(validatePassword(e.target.value));
				return;
			default:
				return;
		}
	}

	return (
		<form id="auth-form" onSubmit={handleSubmit}>
			<h2>{formHeaderText}</h2>
			{ isRegister && 
				<div>
					<label htmlFor='email'> Email </label>
					<input 
						id='auth-email'
						name='email'
						type='email'
						value={email}
						onChange={handleChange}
					/>
				</div>
			}
			<div>
				<label htmlFor='username'> Username </label>
				<input 
					name='username'
					value={username}
					onChange={handleChange}
				/>			
			</div>
			<div>
				<label htmlFor='password'> Password </label>
				<input 
					name='password' 
					type='password'
					value={password}
					onChange={handleChange}
				/>			
			</div>
			<button type='submit'>
				{formButtonText}
			</button>
		</form>
	)
}

export default Auth;