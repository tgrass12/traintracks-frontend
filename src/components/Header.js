import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

let Header = () => {

	return (
		<div className="header">
			<nav className="header-content">
				<Link to="/" id="app-icon"> TrainTracks </Link>
				<ul className="nav-items">
					<li>
						<Link to="/journal"> Journal </Link>
					</li>
					<li>
						<Link to="/calendar"> Calendar </Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Header;