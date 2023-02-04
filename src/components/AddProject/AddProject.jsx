import React, { useState } from "react";
import "./addproject.css";

function AddProject() {
	const [clientName, setClientName] = useState("");
	const [stageNames, setStageNames] = useState(['Pending']);
	const [days, setDays] = useState([0]);
	const [hours, setHours] = useState([0]);
	const [currentStage, setCurrentStage] = useState(0);
	const [templateName, setTemplateName] = useState('');
	const [stages, setStages] = useState([
		{
			stageName: "Pending",
			days: 0,
			hours: 0,
			isCurrent: true,
		},
	]);

	const handleClientNameChange = (event) => {
		setClientName(event.target.value);
	};

	const handleAddStage = () => {
		setStages([
			...stages,
			{
				stageName: "",
				days: 0,
				hours: 0,
				isCurrent: false,
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

	const handleCurrentToggle = (index) => {
		const newStages = stages.map((stage, i) => {
			return {
				...stage,
				isCurrent: i === index,
			};
		});
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
			stageNames,
			days,
			hours,
			currentStage,
			templateName
		};

		// logic to save the project data to the database here
	};

	return (
		<div className="add-project">
			<input
				type="text"
				value={clientName}
				onChange={e => setClientName(e.target.value)}
				placeholder="Client Name"
			/>
			<label>Stages</label>
			{stageNames.map((stageName, index) => (
				<div key={index}>
					<input
						type="text"
						value={stageName}
						onChange={e =>
							setStageNames(
								stageNames.map((name, i) => (i === index ? e.target.value : name))
							)
						}
						disabled={index === 0}
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
						min={0}
						max={1000}
						placeholder="Days"
					/>
					<label>Days</label>
					<input
						type="number"
						value={hours[index]}
						onChange={e =>
							setHours(hours.map((hour, i) => (i === index ? e.target.value : hour)))
						}
						disabled={false}
						placeholder="Hours"
					/>
					<label>Hours</label>
					<input
						type="radio"
						checked={currentStage === index}
						onChange={() => setCurrentStage(index)}
					/>
					Current Stage
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
