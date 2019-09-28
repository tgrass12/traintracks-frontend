import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../../Auth/auth0-wrapper';
import '../../styles/Header.scss';

let Header = () => {
	const { isAuthenticated, loginWithRedirect, logout, loading } = useAuth0();

	return (
		<div className="header">
			<nav className="header-content">
				<Link to="/" id="app-icon"> TrainTracks </Link>
				{ isAuthenticated && 
					<ul className="nav-items">
						<li>
							<Link to="/"> Dashboard </Link>
						</li>
						<li>
							<Link to="/journal"> Journal </Link>
						</li>
						<li>
							<Link to="/calendar"> Calendar </Link>
						</li>
					</ul>
				}
				<div className="auth-btn-container"> 
					{ !isAuthenticated && !loading &&
						<div>
							<button 
								id="register" 
								onClick={() => loginWithRedirect()}
							>
								Register
							</button>	
							<button 
								id="login"
								onClick={() => loginWithRedirect()}
							> 
								Log in 
							</button>
						</div>
					}
					{ isAuthenticated && 
						<button id="logout" onClick={() => logout()}> 
							Sign out 
						</button>
					}
				</div>
			</nav>
		</div>
	)
}

export default Header;