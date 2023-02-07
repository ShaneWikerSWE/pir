import React from 'react';

const UserContext = React.createContext({
	email: {
		userEmail: '',
		setUserEmail: () => { },
	},
	projects: {
		userProjects: [],
		setUserProjects: () => { }
	}
});

export default UserContext;
