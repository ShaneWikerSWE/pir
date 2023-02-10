import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./projectlist.css";
import { UserContext } from '../../UserContext'
import { useToken } from '../../App'

const ProjectList = () => {
	const token = useToken()
	const { stages, setStages, firebaseUser } = useContext(UserContext);

	useEffect(() => {
		const fetchData = async () => {
			const email = firebaseUser.email
			console.log('ProjectList email is', firebaseUser)

			if (token) {
				console.log('ProjectList token is', token)
			}
			const response = await fetch(`http://localhost:4000/stages/${email}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				}
			});
			const stagesData = await response.json();
			setStages(stagesData)
			console.log('ProjectList stages is', stages)

		};
		fetchData();
	}, [token]);

	console.log('ProjectList stages', stages)
	console.log('ProjectList firebaseUser is', firebaseUser)

	const localProjects = stages.length > 0 ? stages.map((stage) => ({
		clientName: stage.clientname,
		status: "pending",
	})) : []
	return (
		<div className="project-list">
			<table>
				<thead>
					<tr>
						<th>Client</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{localProjects.length >= 1 ? (
						localProjects.map((project, index) => (
							<tr key={index}>
								<td>{project.clientName}</td>
								<td>{project.status}</td>
							</tr>
						))
					) : null}
				</tbody>
			</table>
		</div>
	);
};

export default ProjectList;

