import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import logout_icon from '../../assets/logout.png'
import pir from '../../assets/pir.png'
import { auth, db, logout } from "../../firebase";

const Navbar = () => {
	return (
		<>
			<div className="navbar-container">
				<div className="navbar">
					<img src={logo} alt="Logo" className="logo" />
					<Link to="/logout" className="navbar-button">
						<img src={logout_icon} alt="Logout" className="logout" />
					</Link>
					<div className="navbar-buttons">
						<Link to="/calendar" className="navbar-button"></Link>
						<Link to="/add-project" className="navbar-button"></Link>
						<Link to="/project-list" className="navbar-button"></Link>
					</div>
					<div className="pir-container">
						<img src={pir} alt="Pir" className="pir" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
