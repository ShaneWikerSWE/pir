import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./projectlist.css";
import UserContext from "../../UserContext";

const ProjectList = () => {

	const { projects } = useContext(UserContext);
	const { userProjects, setUserProjects } = projects;

	console.log('ProjectList userProjects is', userProjects)
	console.log('ProjectList projects is', projects)

	const localProjects = userProjects.length > 0 ? userProjects.map((userProject) => ({
		clientName: userProject.clientName,
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

