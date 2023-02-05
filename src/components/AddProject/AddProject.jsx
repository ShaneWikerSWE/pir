import React, { useState } from "react";
import "./addproject.css";

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

	const handleClientNameChange = (event) => {
		setClientName(event.target.value);
	};

	const handleClientEmailChange = (event) => {
		setClientName(event.target.value);
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

	const handleNewStage = () => {
		setStageNames([...stageNames, '']);
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
		newStages[index].days = event.target.value;
		setStages(newStages);
	};

	const handleHoursChange = (index, event) => {
		const newStages = [...stages];
		newStages[index].hours = event.target.value;
		setStages(newStages);
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

		// logic to save the project data to the database here
	};

	const handleDeleteStage = (index) => {
		setStageNames(stageNames.filter((_, i) => i !== index));
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
			{stageNames.map((stageName, index) => (
				<div className="stage" key={index}>
					<label>Stage {index + 1}</label>
					<button className="delete-stage" onClick={() => handleDeleteStage(index)}>X</button>
					<input
						type="text"
						value={stageName}
						onChange={e =>
							setStageNames(
								stageNames.map((name, i) => (i === index ? e.target.value : name))
							)
						}
						disabled={false}
						placeholder="Stage Name"
					/>
					<label>How long will this stage take to complete?</label>
					<input
						type="number"
						value={days[index]}
						onChange={e =>
							setDays(
								days.map((day, i) => (i === index ? e.target.value : day))
							)
						}
						placeholder="Days"
						id="days"
					/>
					<label>Days</label>
					<input
						type="number"
						value={hours[index]}
						onChange={e =>
							setHours(
								hours.map((hour, i) => (i === index ? e.target.value : hour))
							)
						}
						placeholder="Hours"
						id="hours"
					/>
					<label>Hours</label>
				</div>
			))}
			<button type="button" onClick={handleNewStage}>
				New Stage
			</button>
			<button type="button" onClick={handleSaveProject}>
				Save Project
			</button>
		</div>
	);
};

export default AddProject;
