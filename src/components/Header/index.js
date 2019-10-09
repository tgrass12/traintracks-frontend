import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../styles/Header.scss';
import {
	logoutUser,
} from '../../store/actions/user';

let Header = () => {
	const isAuthenticated = useSelector(state => state.user.isAuthenticated);
	const isLoading = useSelector(state => state.user.isLoading);
	const dispatch = useDispatch();

	let logout = async () => {
		const api = '/api/auth/logout';
		await fetch(api, {
			method: 'POST'
		});
		dispatch(logoutUser());
	}

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
					{ !isAuthenticated && !isLoading &&
						<div>
							<Link
								to="/register"
								id="register" 
							>
								Register
							</Link>	
							<Link 
								to="/login"
								id="login"
							> 
								Log in 
							</Link>
						</div>
					}
					{ isAuthenticated && !isLoading &&
						<Link id="logout" to="/" onClick={() => logout()}> 
							Sign out 
						</Link>
					}
				</div>
			</nav>
		</div>
	)
}

export default Header;