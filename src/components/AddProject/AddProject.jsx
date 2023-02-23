import React, { useState, useContext } from "react";
import "./addproject.css";
import { UserContext } from "../../UserContext";
import { showToast, hideToast } from '../../App'
import { useToken } from '../../App'

function AddProject() {
	const token = useToken()
	const [projectName, setProjectName] = useState("");
	const [clientName, setClientName] = useState("");
	const [clientEmail, setClientEmail] = useState("");
	const [stageNames, setStageNames] = useState([""]);
	const [days, setDays] = useState([0]);
	const [hours, setHours] = useState([0]);
	const [templateName, setTemplateName] = useState('');
	const [tempStages, setTempStages] = useState([

		{
			stageName: "",
			days: 0,
			hours: 0,
			isCurrent: false
		},
	]);

	const { stages, setStages, firebaseUser } = useContext(UserContext);
	const email = firebaseUser.email
	console.log('AddProject email is', email)

	const handleClientNameChange = (event) => {
		setClientName(event.target.value);
	};

	const handleClientEmailChange = (event) => {
		setClientEmail(event.target.value);
	};

	const handleAddStage = () => {
		setTempStages([
			...tempStages,
			{
				stageName: "",
				days: 0,
				hours: 0,
			},
		]);
	};

	const handleNewStage = (e) => {
		setTempStages([...tempStages, { stageName: "", days: 0, hours: 0 }]);
		setDays([...days, 0]);
		setHours([...hours, 0]);
	};

	const handleStageNameChange = (index, event) => {
		const newTempStages = [...tempStages];
		newTempStages[index].stageName = event.target.value;
		setTempStages(newTempStages);
	};

	const handleDaysChange = (index, event) => {
		const newTempStages = [...tempStages];
		newTempStages[index].days = Number(event.target.value);
		setTempStages(newTempStages);
		console.log('handleDaysChange', event.target.value)
	};

	const handleHoursChange = (index, event) => {
		const newTempStages = [...tempStages];
		newTempStages[index].hours = Number(event.target.value);
		setTempStages(newTempStages);
		console.log('handleHoursChange', event.target.value)
	};

	const handleSaveTemplate = () => {
		// code to save template here
		const template = { clientName, tempStages };
		console.log("Saved template:", template);
	};

	const handleLoadTemplate = () => {
		// code to load template here
	};

	const clearData = () => {
		setClientName("");
		setClientEmail("");
		setProjectName("");
		setTempStages([{ stageName: "", days: 0, hours: 0 }]);
	}

	const handleSaveProject = async (e) => {
		e.preventDefault();

		const data = {
			project_name: projectName,
			client_name: clientName,
			client_email: clientEmail,
			user_email: email,
		};

		console.log('handleSaveProject data is', data)

		try {
			// Create project
			const response = await fetch("http://localhost:4000/projects", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${token}`,
				},
				body: JSON.stringify(data),
			});

			if (response.status === 201) {
				console.log('AddProject response is', response)

				const responseData = await response.text(); // Extract response data

				console.log(responseData)
				const projectIdString = responseData.split(":").pop().trim(); // "14"
				const projectId = parseInt(projectIdString); // 14
				console.log("Project ID:", projectId);

				// Create stages and project_stages
				for (let i = 0; i < tempStages.length; i++) {
					const stageData = {
						stage_name: tempStages[i].stageName,
						stage_number: i + 1,
						days: tempStages[i].days,
						hours: tempStages[i].hours,
						is_complete: false,
						project_id: projectId,
					};

					console.log('handleSaveProject stageData is', stageData)
					const stageResponse = await fetch("http://localhost:4000/stages", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${token}`,
						},
						body: JSON.stringify(stageData),
					});

					if (stageResponse.status === 201) {

						const stageResponseData = await stageResponse.text(); // Extract response data

						console.log(stageResponseData)
						const stageIdString = stageResponseData.split(":").pop().trim();
						const stageId = parseInt(stageIdString);
						console.log("Stage ID:", stageId);

						const projectStageData = {
							project_id: projectId,
							stage_id: stageId,
						};

						console.log("projectStageData is", projectStageData);

						const projectStageResponse = await fetch("http://localhost:4000/project_stages", {
							method: "POST",
							headers: {
								"Content-Type": "application/json",
								"Authorization": `Bearer ${token}`,
							},
							body: JSON.stringify(projectStageData),
						});

						if (projectStageResponse.status === 201) {
							// Successfully created stage and project_stage
							// Update stages state with the new stage
							const newStage = {
								stage_id: `stage${i + 1}`,
								stage_name: tempStages[i].stageName,
								stage_number: i + 1,
								days: tempStages[i].days,
								hours: tempStages[i].hours,
								is_complete: false,
								project_id: projectId,
							};
							setStages([...stages, newStage]);
						} else {
							// Error creating project_stage
							console.error("Error creating project_stage", projectStageResponse);
						}
					} else {
						// Error creating stage
						console.error("Error creating stage", stageResponse);
					}
				}

				// Clear form fields
				setClientName("");
				setClientEmail("");
				setStageNames([""]);
				setDays([0]);
				setHours([0]);
				setTemplateName("");
				setTempStages([
					{
						stageName: "",
						days: 0,
						hours: 0,
						isCurrent: false,
					},
				]);

				showToast("Project created successfully!", "success");
			} else {
				console.error("Error creating project", response);
				showToast("Failed to create project", "error");
			}
		} catch (error) {
			console.error("Error creating project", error);
			showToast("Failed to create project", "error");
		};
	}

	const handleDeleteStage = (index) => {
		setStages(stages.filter((_, i) => i !== index));
		setDays(days.filter((_, i) => i !== index));
		setHours(hours.filter((_, i) => i !== index));
	};

	document.querySelectorAll('.add-project input[type="number"]').forEach(function(input) {
		input.addEventListener('focus', function() {
			this.select();
		});
	});

	return (
		<div className="add-project">
			<input
				type="text"
				value={projectName}
				onChange={e => setProjectName(e.target.value)}
				placeholder="Project Name"
				id="project-name"
			/>
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
			{tempStages.map((stage, index) => (
				<div className="stage" key={index}>
					<label>Stage {index + 1}</label>
					{stages.length > 1 && (
						<button className="delete-stage" onClick={() => handleDeleteStage(index)}>窱</button>
					)}
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
