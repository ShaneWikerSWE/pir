import React, { useContext, useEffect, useState } from "react";
import EditProjectList from './EditProjectList'
import { Link } from "react-router-dom";
import "./projectlist.css";
import { UserContext } from '../../UserContext'
import { useToken } from '../../App'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const ProjectList = () => {
	const token = useToken();
	const { stages, setStages, firebaseUser } = useContext(UserContext);
	const [editingProject, setEditingProject] = useState(null);
	const [projects, setProjects] = useState([]);
	const [originalProjects, setOriginalProjects] = useState([]);

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
			console.log('ProjectList stagesData is', stagesData)
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
						project_id: cur.project_id,
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
		setOriginalProjects(projectData);
		console.log('ProjectList stages is', stages)
		console.log('ProjectList projects is', projects)
		console.log('ProjectList projectData is', projectData)
	}, [stages]);

	const onDragEnd = (result) => {
		if (!result.destination) return;

		const newProjects = [...projects];
		const [reorderedproject] = newProjects.splice(result.source.index, 1);
		newProjects.splice(result.destination.index, 0, reorderedproject);
		setProjects(newProjects);
	}

	const onSaveOrder = async () => {
		const updatedProjects = projects.map((project, index) => {
			const updatedStages = project.stages.map((stage, stageIndex) => {
				return {
					...stage,
				};
			});
			return {
				...project,
				project_number: index + 1,
				project_name: project.project_name,
				project_id: project.project_id,
				stages: updatedStages
			};
		});
		console.log('ProjectList updatedProjects is', updatedProjects)

		setProjects(updatedProjects);

		const updateStages = (updatedProjects) => {
			if (!updatedProjects) {
				return [];
			}

			return updatedProjects.flatMap((project) =>
				(project.stages || []).map((stage) => ({
					...stage,
					project_id: project.project_id,
					project_name: project.project_name,
					project_number: project.project_number,
				}))
			);
		};
		const updatedStages = updateStages(updatedProjects)

		console.log('ProjectList updatedStages is', updatedStages);

		setStages(updatedStages);

		// Call the endpoint to update project numbers
		try {
			const updatedProjectsPayload = updatedProjects.map(project => ({
				project_id: project.project_id,
				project_number: project.project_number
			}))

			console.log('ProjectList updatedProjectsPayload is', updatedProjectsPayload)

			const response = await fetch('http://localhost:4000/update-project-numbers', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`,
				},
				body: JSON.stringify(updatedProjectsPayload)
			});

			if (response.status === 201) {
				console.log('Project numbers updated successfully');
			} else {
				console.error('Error updating project numbers:', response);
			}
		} catch (error) {
			console.error('Error updating project numbers:', error);
		}

		setOriginalProjects(updatedProjects);
	};

	const onCancelOrder = () => {
		setProjects(originalProjects);
	}

	return (
		<>
			<>

				{JSON.stringify(projects) !== JSON.stringify(originalProjects) && (
					<>
						<div className="new-order-prompt">
							Would you like to save the new order?
						</div>
						<div className="project-list-actions">
							<button className="save-button" onClick={onSaveOrder}>Save</button>
							<button className="cancel-button" onClick={onCancelOrder}>Cancel</button>
						</div>
					</>
				)}
			</>
			<div className="project-list-wrapper">
				<DragDropContext onDragEnd={onDragEnd} className="project-list-wrapper">
					<Droppable droppableId="droppable">
						{(provided, snapshot) => (
							<div
								{...provided.droppableProps}
								ref={provided.innerRef}
							>
								{projects.map((project, index) => (
									<Draggable key={project.project_name + project.project_number} draggableId={project.project_name + project.project_number} index={index}>
										{(provided, snapshot) => (
											<div
												ref={provided.innerRef}
												{...provided.draggableProps}
												{...provided.dragHandleProps}
												className="project-list-item"
											>
												{editingProject === project ? (
													<div className="editing">
														<div className="project-name">{project.project_number + '. ' + project.project_name}</div>
														<EditProjectList project={project} />
														<button className="cancel-button" onClick={() => setEditingProject(null)}>Cancel</button>
													</div>
												) : (
													<>
														<div className="project-name">{project.project_number + '. ' + project.project_name}</div>
														<button className="edit-button" onClick={() => setEditingProject(project)}>Edit</button>
													</>
												)}
											</div>
										)}
									</Draggable>
								))}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				</DragDropContext >

			</div>
		</>
	)
}

export default ProjectList
