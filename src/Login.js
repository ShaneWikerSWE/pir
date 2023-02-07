import React, { useEffect, useState, useContext } from "react";
import UserContext from './UserContext'
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import "./Login.css";

function Login() {
	const [password, setPassword] = useState("");
	const [user, loading, error] = useAuthState(auth);
	const navigate = useNavigate();
	const { email } = useContext(UserContext);
	const { userEmail, setUserEmail } = email;
	const { projects } = useContext(UserContext);
	const { userProjects, setUserProjects } = projects;

	useEffect(() => {
		if (loading) {
			return;
		}
		if (user && user.email) {
			setUserEmail(user.email)
			navigate("/dashboard");
			console.log(user.email)
		}
	}, [user, loading]);

	return (
		<div className="login">
			<div className="login__container">
				<input
					type="text"
					className="login__textBox"
					value={userEmail}
					onChange={(e) => setUserEmail(e.target.value)}
					placeholder="E-mail Address"
				/>
				<input
					type="password"
					className="login__textBox"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
				/>
				<button
					className="login__btn"
					onClick={() => logInWithEmailAndPassword(email, password)}
				>
					Login
				</button>
				<button className="login__btn login__google" onClick={signInWithGoogle}>
					Login with Google
				</button>
				<div>
					<Link to="/reset">Forgot Password</Link>
				</div>
				<div>
					Don't have an account? <Link to="/register">Register</Link> now.
				</div>
			</div>
		</div>
	);
}

export default Login;
