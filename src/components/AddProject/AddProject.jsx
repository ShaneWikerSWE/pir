import React, { useState, useContext } from "react";
import "./addproject.css";
import UserContext from "../../UserContext";

function AddProject() {
	const [clientName, setClientName] = useState("");
	const [clientEmail, setClientEmail] = useState("");
	const [stageNames, setStageNames] = useState([""]);
	const [days, setDays] = useState([0]);
	const [hours, setHours] = useState([0]);
	const [toast, setToast] = useState('');
	const [templateName, setTemplateName] = useState('');
	const [stages, setStages] = useState([
		{
			stageName: "",
			days: 0,
			hours: 0,
		},
	]);

	const showToast = (toastMessage, color) => {
		setToast(toastMessage)
		document.querySelector(".toast").style.visibility = "visible";
		document.querySelector(".toast").style.background = color;
	};

	const hideToast = () => {
		document.querySelector(".toast").style.visibility = "hidden";
	};

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

	const clearData = () => {
		setClientName("");
		setClientEmail("");
		setStages([{ stageName: "", days: 0, hours: 0 }]);
	}

	const handleSaveProject = () => {
		const saveProject = async (stageData) => {
			try {
				const res = await fetch("http://localhost:4000/users", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(stageData),
				});
				const data = await res.json();
				console.log(data);
				clearData()
				showToast('Success, you can see this client in the project list and calendar views above', 'black')
			} catch (error) {
				console.log(error);
				if (error.message.includes('Unexpected token')) {
					clearData()
					showToast('Success, you can see this client in the project list and calendar views above', 'black')
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
		stages.forEach((stage, index) => {
			const stageData = {
				userEmail,
				clientName,
				clientEmail,
				stageName: stage.stageName,
				stageNumber: index,
				days: stage.days,
				hours: stage.hours,
				isCurrent: index === 0,
			};
			console.log("handleSaveProject stageData is", stageData);
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
			{stages.map((stage, index) => (
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
			<div className="toast"> {toast} </div>
		</div>
	);
};

export default AddProject;
