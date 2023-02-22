const express = require('express');
const client = require('./db');
const cors = require('cors');

const bodyParser = require('body-parser');
const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));

const port = 4000;

app.use(bodyParser.json());

app.post('/project_stages', (req, res) => {
	const { project_id, stage_id } = req.body;
	console.log('project_stages req.body is', req.body)
	if (!project_id || !stage_id) {
		res.status(400).send("Bad Request: project_id and stage_id are required.");
		return;
	}

	client.query(
		'INSERT INTO project_stages (project_id, stage_id) VALUES ($1, $2)',
		[project_id, stage_id],
		(error) => {
			if (error) {
				res.status(500).send("Internal Server Error: Failed to insert data into the database.");
				return;
			}
			res.status(201).send(`Entry added for project_id: ${project_id} stage_id: ${stage_id}`);
		}
	);
});

app.post('/projects', (req, res) => {
	const { project_name, client_email, client_name, user_email } = req.body;
	console.log('projects req.body is', req.body);
	if (!project_name || !client_email || !client_name || !user_email) {
		res.status(400).send("Bad Request: project_name, client_email, client_name, and user_email are required.");
		return;
	}

	client.query(
		'INSERT INTO projects (project_name, client_email, client_name, user_email, current_stage, project_number) VALUES ($1, $2, $3, $4, $5, (SELECT COALESCE(MAX(project_number), 0) + 1 FROM projects WHERE user_email = $4)) RETURNING project_id',
		[project_name, client_email, client_name, user_email, 'pending'],
		(error, result) => {
			if (error) {
				console.log('projects error is', error)

				res.status(500).send("Internal Server Error: Failed to insert data into the database.");
				return;
			}
			res.status(201).send(`Entry added for project_name : ${project_name}. Project ID: ${result.rows[0].project_id}`);
		}
	);
});

app.post('/stages', (req, res) => {
	const { stage_name, stage_number, days, hours, is_complete, project_id } = req.body;

	// Parse string values as their expected data types
	const parsedDays = parseInt(days);
	const parsedHours = parseInt(hours);
	const parsedIsComplete = is_complete === true || is_complete === 'true';
	const parsedProjectId = parseInt(project_id);

	if (!stage_name || !stage_number || isNaN(parsedDays) || isNaN(parsedHours) || typeof parsedIsComplete !== 'boolean' || isNaN(parsedProjectId)) {
		return res.status(400).send({ error: 'All values are required' });
	}

	client.query(
		'INSERT INTO stages (stage_name, stage_number, days, hours, is_complete, project_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING stage_id',
		[stage_name, stage_number, parsedDays, parsedHours, parsedIsComplete, parsedProjectId],
		(error, result) => {
			if (error) {
				console.log('error', error)
				return res.status(500).send({ error: 'Error inserting data into the database' });
			}
			res.status(201).send(`Entry added for stage_name: ${stage_name}. Stage ID: ${result.rows[0].stage_id}`);
		}
	);
});

app.post('/users', (req, res) => {
	const { user_id, user_email } = req.body;

	if (!user_id || !user_email) {
		return res.status(400).send({ error: 'Both user_id and user_email are required' });
	}

	client.query(
		'INSERT INTO users ( user_id, user_email ) VALUES ($1, $2)',
		[user_id, user_email],
		(error) => {
			if (error) {
				return res.status(500).send({ error: 'Error inserting data into the database' });
			}

			res.status(201).send(`Entry added for user_id: ${user_id}`);
		}
	);
});

app.post('/work_sessions', (req, res) => {
	const { work_session_id, start_time, end_time, user_email } = req.body;

	if (!work_session_id || !start_time || !end_time || !user_email) {
		return res.status(400).send({ error: 'All values are required' });
	}

	client.query(
		'INSERT INTO work_sessions ( work_session_id, start_time, end_time, user_email ) VALUES ($1, $2, $3, $4)',
		[work_session_id, start_time, end_time, user_email],
		(error) => {
			if (error) {
				return res.status(500).send({ error: 'Error inserting data into the database' });
			}

			res.status(201).send(`Entry added for work_session_id: ${work_session_id}`);
		}
	);
});

app.get('/stages/:email', (req, res) => {
	const email = req.params.email;
	console.log('server email is ', email);
	client.query(
		'SELECT s.*, p.project_name, p.project_number FROM stages s JOIN projects p ON s.project_id = p.project_id WHERE p.user_email = $1',
		[email],
		(error, results) => {
			if (error) {
				throw error;
			}
			try {
				res.status(200).json(results.rows);
			} catch (e) {
				console.error(e);
			}
		}
	);
});

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
