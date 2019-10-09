import React, { useState } from 'react';
import '../../styles/Auth.scss';

let Auth = ({isRegister, onAuth}) => {
	const formHeaderText = isRegister ? 'Join Today' : 'Welcome Back';
	const formButtonText = isRegister ? 'Register': 'Sign in';
	const [isAuthorizing, setIsAuthorizing] = useState(false);
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const validatePassword = (password) => {
		return isRegister ? password.length > 6 : password.length > 0;
	}

	const validateUsername = (username) => {
		return isRegister ? username.length > 2 : username.length > 0;
	}

	const validateEmail = (email) => {
		return isRegister ? email.includes('@') : true;
	}

	const handleSubmit = async (e) => {
		e.preventDefault();

		const isUsernameValid = validateUsername(username);
		const isPasswordValid = validatePassword(password);
		const isEmailValid = validateEmail(email);
		const isFormValid = isUsernameValid && isEmailValid && isPasswordValid;

		if (isFormValid) {
			setIsAuthorizing(true);
			const isAuthed = await onAuth(username, password, isRegister, email);
			if (!isAuthed) {
				setIsAuthorizing(false);
			}
		}

		else {
			console.log('Form is invalid');
		}
	}

	const handleChange = (e) => {
		switch(e.target.name) {
			case 'email':
				setEmail(e.target.value);
				return;
			case 'username':
				setUsername(e.target.value);
				return;
			case 'password':
				setPassword(e.target.value);
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
						type='text'
						value={email}
						onChange={handleChange}
					/>
				</div>
			}
			<div>
				<label htmlFor='username'> Username </label>
				<input 
					name='username'
					type='text'
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
			{ isAuthorizing &&
				<div className="auth-spinner" />
			}
			{ !isAuthorizing &&
				<button type='submit'>
					{formButtonText}
				</button>
			}
		</form>
	)
}

export default Auth;