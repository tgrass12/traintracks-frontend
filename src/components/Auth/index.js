import React from 'react';

let Auth = ({isRegister, onAuth}) => {

	return (
		<div>
			{ !isRegister &&
				<div> Login Component </div>
			}
			{ isRegister &&
				<div> Register Component </div>
			}
		</div>
	)
}

export default Auth;