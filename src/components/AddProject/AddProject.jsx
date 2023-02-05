import React, { useState, useContext } from "react";
import "./addproject.css";
import UserContext from "../../UserContext";
import saveProject from '../../features/saveProject'

function AddProject() {
	const [clientName, setClientName] = useState("");
	const [clientEmail, setClientEmail] = useState("");
	const [stageNames, setStageNames] = useState([""]);
	const [days, setDays] = useState([0]);
	const [hours, setHours] = useState([0]);
	const [templateName, setTemplateName] = useState('');
	const [stages, setStages] = useState([
		{
			stageName: "",
			days: 0,
			hours: 0,
		},
	]);

	const { userEmail } = useContext(UserContext);

	const handleClientNameChange = (event) => {
		setClientName(event.target.value);
	};

	const handleClientEmailChange = (event) => {
		setClientEmail(event.target.value);
	};

	const handleAddStage = () => {
		setStages([
			...stages,
			{
				stageName: "",
				days: 0,
				hours: 0,
			},
		]);
	};

	const handleNewStage = (e) => {
		setStages([...stages, { stageName: "", days: 0, hours: 0 }]);
		setDays([...days, 0]);
		setHours([...hours, 0]);
	};

	const handleStageNameChange = (index, event) => {
		const newStages = [...stages];
		newStages[index].stageName = event.target.value;
		setStages(newStages);
	};

	const handleDaysChange = (index, event) => {
		const newStages = [...stages];
		newStages[index].days = Number(event.target.value);
		setStages(newStages);
		console.log('handleDaysChange', event.target.value)
	};

	const handleHoursChange = (index, event) => {
		const newStages = [...stages];
		newStages[index].hours = Number(event.target.value);
		setStages(newStages);
		console.log('handleHoursChange', event.target.value)
	};

	const handleSaveTemplate = () => {
		// code to save template here
		const template = { clientName, stages };
		console.log("Saved template:", template);
	};

	const handleLoadTemplate = () => {
		// code to load template here
	};

	const handleSaveProject = () => {
		const projectData = {
			clientName,
			clientEmail,
			stages,
		};

		console.log(userEmail, projectData);
		saveProject(userEmail, projectData)
	};

	const handleDeleteStage = (index) => {
		setStages(stages.filter((_, i) => i !== index));
		setDays(days.filter((_, i) => i !== index));
		setHours(hours.filter((_, i) => i !== index));
	};

	return (
		<div className="add-project">
			<input
				type="text"
				value={clientName}
				onChange={e => setClientName(e.target.value)}
				placeholder="Client Name"
				id="client-name"
			/>
			<input
				type="text"
				value={clientEmail}
				onChange={e => setClientEmail(e.target.value)}
				placeholder="Client Email"
				id="client-email"
			/>
			{stages.map((stage, index) => (
				<div className="stage" key={index}>
					<label>Stage {index + 1}</label>
					<button className="delete-stage" onClick={() => handleDeleteStage(index)}>X</button>
					<input
						type="text"
						value={stage.stageName}
						onChange={e => handleStageNameChange(index, e)}
						placeholder="Stage Name"
					/>
					<input
						type="number"
						value={stage.days}
						onChange={e => handleDaysChange(index, e)}
						placeholder="Days"
					/>
					<input
						type="number"
						value={stage.hours}
						onChange={e => handleHoursChange(index, e)}
						placeholder="Hours"
					/>
				</div>
			))}
			<button onClick={handleNewStage}>Add Stage</button>
			<button onClick={handleSaveProject}>Save Project</button>
		</div>
	);
};

export default AddProject;
