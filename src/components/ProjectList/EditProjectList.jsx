import './EditProjectList'

const EditProjectList = ({ project, setEditingProject }) => {
	console.log("EditProjectList project is", project);

	const handleEditStageData = (stage_id, field, value) => {
		// TODO: implement handleEditStageData function
	};

	const handleSaveProjectData = () => {
		// TODO: implement handleSaveProjectData function
	};

	return (
		<div className="edit-project">
			<table>
				<thead className="header">
					<tr>
						<th>#</th>
						<th>Stage</th>
						<th>Days</th>
						<th>Hours</th>
						<th>Done?</th>
					</tr>
				</thead>
				<tbody className="body">
					{project.stages.map((stage, stageIndex) => (
						<tr key={stage.stage_id}>
							<td>{stage.stage_number}</td>
							<td>
								<input
									type="text"
									value={stage.stage_name}
									className="text-input"
									onChange={(e) => handleEditStageData(stage.stage_id, "stage_name", e.target.value)}
								/>
							</td>
							<td>
								<input
									type="text"
									value={stage.days}
									className='text-input'
									onChange={(e) =>
										handleEditStageData(stage.stage_id, "days", e.target.value)
									}
								/>
							</td>
							<td>
								<input
									type="text"
									value={stage.hours}
									className='text-input'
									onChange={(e) =>
										handleEditStageData(stage.stage_id, "hours", e.target.value)
									}
								/>
							</td>
							<td>
								<input
									type="checkbox"
									checked={stage.is_complete}
									className='checkbox-input'
									onChange={(e) =>
										handleEditStageData(
											stage.stage_id,
											"is_complete",
											e.target.checked
										)
									}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<button className="edit-save-button" onClick={handleSaveProjectData}>
				Save
			</button>
			<button className="edit-cancel-button" onClick={() => setEditingProject(null)}>
				Cancel
			</button>
		</div>
	);
};

export default EditProjectList;
