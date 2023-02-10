import React, { useState, useContext } from "react";
import "./addproject.css";
import { UserContext } from "../../UserContext";
import { showToast, hideToast } from '../../App'
import { useToken } from '../../App'


function AddProject() {
	const token = useToken()
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
		setTempStages([{ stageName: "", days: 0, hours: 0 }]);
	}

	const handleSaveProject = () => {
		const saveProject = async (stageData) => {
			const stageDataJSON = JSON.stringify(stageData)
			console.log('handleSaveProject stageData in JSON is', stageDataJSON)

			if (token) {
				console.log('ProjectList token is', token)
				try {
					const res = await fetch("http://localhost:4000/stages", {
						method: "POST",
						headers: {
							Authorization: `Bearer ${token}`,
							"Content-Type": "application/json"
						},
						body: stageDataJSON,
					});
					showToast('Success, you can see this client in the project list and calendar views above', 'black')
					setStages(prevData => [...prevData, stageData])
				} catch (error) {
					console.log(error)
					showToast('Save failed, try again later', 'red')
				}
			}
		};

		const parameters = ["stageName", "days", "hours"];
		const clientParameters = ["clientName", "clientEmail"]

		for (const stage of stages) {
			for (const parameter of parameters) {
				if (!stage[parameter]) {
					if (!stage['days'] > 0 && !stage['hours'] > 0) {
						console.log('parameter', parameter + ' is missing')
						console.log(stages)
						showToast('Fill in all fields to save project', 'red');
						return;
					}
					hideToast()
				}
			}
		}

		for (const parameter of clientParameters) {
			if (!parameter) {
				console.log('parameter', parameter + ' is missing')
				showToast('Fill in all fields to save project', 'red');
				return;
			}
		}
		tempStages.forEach((stage, index) => {
			console.log('AddProject email is', email)
			const stageData = {
				userEmail: email,
				clientName: clientName,
				clientEmail: clientEmail,
				stageName: stage.stageName,
				stageNumber: index,
				days: stage.days,
				hours: stage.hours,
				isCurrent: index === 0,
			};
			console.log("handleSaveProject stageData is", stageData);
			console.log("handleSaveProject stageData email is", stageData.userEmail);
			saveProject(stageData);
		});
	};

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
