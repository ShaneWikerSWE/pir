import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Navbar = () => {
	const handleDashboardClick = () => {
		window.location.href = "/dashboard";
	};

	return (
		<div className="navbar-container">
			<div className="navbar">
				<img src={logo} alt="Logo" className="logo" />
				<button className="back-button" onClick={handleDashboardClick}>
					Back
				</button>
				<p className="title">PIR</p>
			</div>
		</div>
	);
};

export default Navbar;
