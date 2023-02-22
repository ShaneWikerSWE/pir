import React, { useContext, useEffect, useState, useRef } from "react";

import { Link } from "react-router-dom";
import "./projectlist.css";
import { UserContext } from '../../UserContext'
import { useToken } from '../../App'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const ProjectList = () => {
	const token = useToken();
	const { stages, setStages, firebaseUser } = useContext(UserContext);

	const [projects, setProjects] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const email = firebaseUser.email;
			const response = await fetch(`http://localhost:4000/stages/${email}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			const stagesData = await response.json();
			setStages(stagesData);
		};

		if (firebaseUser) {
			fetchData();
		}
	}, [firebaseUser, token]);

	useEffect(() => {
		const projectData = Object.values(
			stages.reduce((acc, cur) => {
				if (acc[cur.project_number]) {
					acc[cur.project_number].stages.push({
						stage_id: cur.stage_id,
						stage_name: cur.stage_name,
						stage_number: cur.stage_number,
						days: cur.days,
						hours: cur.hours,
						is_complete: cur.is_complete,
					});
				} else {
					acc[cur.project_number] = {
						project_number: cur.project_number,
						project_name: cur.project_name,
						stages: [
							{
								stage_id: cur.stage_id,
								stage_name: cur.stage_name,
								stage_number: cur.stage_number,
								days: cur.days,
								hours: cur.hours,
								is_complete: cur.is_complete,
							},
						],
					};
				}
				return acc;
			}, {})
		);
		setProjects(projectData);
	}, [stages]);

	const onDragEnd = (result) => {
		if (!result.destination) return;

		const newProjects = [...projects];
		const [reorderedproject] = newProjects.splice(result.source.index, 1);
		newProjects.splice(result.destination.index, 0, reorderedproject);
		setProjects(newProjects);
	}

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable droppableId="droppable">
				{(provided, snapshot) => (
					<div

						{...provided.droppableProps}
						ref={provided.innerRef}
					>
						{projects.map((project, index) => (
							<Draggable key={project.project_name + index} draggableId={project.project_name + index} index={index}>
								{(provided, snapshot) => (
									<div
										ref={provided.innerRef}
										{...provided.draggableProps}
										{...provided.dragHandleProps}
										className="project-list-item"
									>
										<button className="edit-button">Edit</button>
										<div className="project-number">{project.project_number}</div>
										<div className="project-name">{project.project_name}</div>
									</div>
								)}
							</Draggable>
						))}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</DragDropContext >
	);
};

export default ProjectList;
