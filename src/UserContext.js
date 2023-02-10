import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {
	const [stages, setStages] = useState([]);
	const [firebaseUser, setFirebaseUser] = useState(null);

	return (
		<UserContext.Provider value={{ stages, firebaseUser, setStages, setFirebaseUser }}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
