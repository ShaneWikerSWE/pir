import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import React, { useState, useMemo } from "react";
import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";
import Dashboard from "./Dashboard";
import AddProject from "./components/AddProject/AddProject";
import Navbar from './components/Navbar/Navbar'
import Calendar from './components/Calendar/Calendar'
import ProjectList from './components/ProjectList/ProjectList'
import { logout as logoutFunc, auth } from "./firebase";
import UserContext from "./UserContext"

function Logout() {
	auth.signOut()
	return (
		<Login />
	)
}

function App() {
	const [userEmail, setUserEmail] = useState()

	const value = useMemo(() => ({ userEmail, setUserEmail }), [userEmail, setUserEmail]);

	return (
		<>
			<UserContext.Provider value={value}>
				<div className="app">
					<Router>
						<Navbar />
						<Routes>
							<Route exact path="/" element={<Login />} />
							<Route exact path="/register" element={<Register />} />
							<Route exact path="/reset" element={<Reset />} />
							<Route exact path="/dashboard" element={<Dashboard />} />
							<Route exact path="/add-project" element={<AddProject />} />
							<Route exact path="/calendar" element={<Calendar />} />
							<Route exact path="/project-list" element={<ProjectList />} />
							<Route exact path="/logout" element={<Logout />} />
						</Routes>
					</Router>
				</div>
			</UserContext.Provider>
		</>
	);
}

export default App;
