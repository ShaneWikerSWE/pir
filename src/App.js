import "./App.css";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate
} from "react-router-dom";
import React, { useState, useMemo } from "react";
import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";
import Dashboard from "./Dashboard";
import AddProject from "./components/AddProject/AddProject";
import Navbar from "./components/Navbar/Navbar";
import Calendar from "./components/Calendar/Calendar";
import ProjectList from "./components/ProjectList/ProjectList";
import { logout as logoutFunc, auth } from "./firebase";
import UserContext from "./UserContext";
import ProtectedRoute from "./ProtectedRoute";
import { useAuthState } from "react-firebase-hooks/auth";

function Logout() {
	auth.signOut();
	return <Login />;
}

export const showToast = (toastMessage, color) => {
	document.querySelector(".toast").style.visibility = "visible";
	document.querySelector(".toast").style.background = color;
	document.querySelector(".toast").innerHTML = toastMessage;
	setTimeout(hideToast, 5000);
};

export const hideToast = () => {
	document.querySelector(".toast").style.visibility = "hidden";
	document.querySelector(".toast").innerHTML = "";
};

function App() {
	const [user, loading, error] = useAuthState(auth);
	const [userEmail, setUserEmail] = useState();
	const [userProjects, setUserProjects] = useState([]);
	const email = useMemo(() => ({ userEmail, setUserEmail }), [
		userEmail,
		setUserEmail
	]);
	const projects = useMemo(() => ({ userProjects, setUserProjects }), [
		userProjects,
		setUserProjects
	]);

	return (
		<>
			<UserContext.Provider value={{ email, projects }}>
				<div className="app">
					<Router>
						<Navbar />
						<Routes>
							<Route exact path="/" element={<Login />} />
							<Route exact path="/register" element={<Register />} />
							<Route exact path="/reset" element={<Reset />} />
							<Route exact path="/dashboard" element={<ProtectedRoute user={user}><Dashboard /></ProtectedRoute>} />
							<Route exact path="/add-project" element={<ProtectedRoute user={user}><AddProject /></ProtectedRoute>} />
							<Route exact path="/calendar" element={<ProtectedRoute user={user}><Calendar /></ProtectedRoute>} />
							<Route exact path="/project-list" element={<ProtectedRoute user={user}><ProjectList /></ProtectedRoute>} />
							<Route exact path="/logout" element={<Logout />} />
						</Routes>
					</Router>
					<div className="toast" />
				</div>
			</UserContext.Provider>
		</>
	);
}

export default App;
