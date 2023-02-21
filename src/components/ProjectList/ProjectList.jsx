import React, { useContext, useEffect, useState, useRef } from "react";

import { Link } from "react-router-dom";
import "./projectlist.css";
import { UserContext } from '../../UserContext'
import { useToken } from '../../App'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const ProjectRow = ({ project, index, onDragStart, onDragOver, onDrop }) => {
	return (
		<tr>
			<td>
				<i className="handle" aria-hidden="true"></i>
			</td>
			<td>{project.clientName}</td>
			<td>{project.status}</td>
		</tr>
	);
};

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
		currentStatus: "pending",
	})) : []
	console.log('projectList localProjects is', localProjects)
	const [projects, setProjects] = useState(localProjects);

	function handleOnDragEnd(result) {
		if (!result.destination) return;

		const newProjects = Array.from(projects);
		const [reorderedItem] = newProjects.splice(result.source.index, 1);
		newProjects.splice(result.destination.index, 0, reorderedItem);
		setProjects(newProjects);
	}
	return (
		<div className="project-list">
			<DragDropContext onDragEnd={handleOnDragEnd}>
				<Droppable droppableId="projects">
					{(provided) => (
						<ul className="projects" {...provided.droppableProps} ref={provided.innerRef}>
							{localProjects.map(({ clientName, currentStatus }, index) => {
								return (
									<Draggable key={index} draggableId={clientName + index} index={index}>
										{(provided) => (
											<li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
												{clientName}
												{currentStatus}
											</li>
										)}
									</Draggable>
								);
							})}
							{provided.placeholder}
						</ul>
					)}
				</Droppable>
			</DragDropContext>
		</div>
	);
};

export default ProjectList;

