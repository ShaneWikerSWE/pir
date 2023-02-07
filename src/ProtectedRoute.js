import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./firebase";

const ProtectedRoute = ({ user, children }) => {
	if (!user) {
		return <Navigate to="/" replace />;
	}

	return children;
};

export default ProtectedRoute;
