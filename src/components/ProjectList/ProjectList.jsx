import React from "react";
import { Link } from "react-router-dom";
import "./projectlist.css";

const ProjectList = ({ name }) => {
	const projects = [
		{ client: "ACME Inc.", status: "pending" },
		{ client: "ABC Corp.", status: "in progress" },
		{ client: "XYZ LLC", status: "finished" },
		{ client: "EcoGreen Solutions", status: "pending" },
	];

	return (
		<div className="project-list">
			<Link to="/add-project">
				<button style={{ top: "100px" }} className="add-project-button">Add project</button>
			</Link>
			<table>
				<thead>
					<tr>
						<th>Client</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{projects.map((project, index) => (
						<tr key={index}>
							<td>{project.client}</td>
							<td>{project.status}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ProjectList;
