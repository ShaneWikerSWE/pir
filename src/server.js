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
	console.log('stages req.body is', req.body)
	if (!project_id || !stage_id) {
		res.status(400).send("Bad Request: project_id and stage_id are required.");
		return;
	}

	client.query(
		'INSERT INTO stages (project_id, stage_id) VALUES ($1, $2)',
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

const projectIdRegex = /^[a-zA-Z0-9]+$/;

app.post('/projects', (req, res) => {
	const { project_id, client_email, client_name, user_email } = req.body;
	console.log('stages req.body is', req.body)
	if (!project_id || !client_email || !client_name || !user_email) {
		res.status(400).send("Bad Request: project_id, client_email, client_name, and user_email are required.");
		return;
	}

	if (!projectIdRegex.test(project_id)) {
		res.status(400).send("Bad Request: project_id must contain only letters and numbers.");
		return;
	}

	client.query(
		'INSERT INTO projects (project_id, client_email, client_name, user_email) VALUES ($1, $2, $3, $4)',
		[project_id, client_email, client_name, user_email],
		(error) => {
			if (error) {
				res.status(500).send("Internal Server Error: Failed to insert data into the database.");
				return;
			}
			res.status(201).send(`Entry added for project_id : ${project_id}`);
		}
	);
});

app.post('/stages', (req, res) => {
	const { stage_id, stage_name, stage_number, days, hours, is_complete, project_id } = req.body;

	if (!stage_id || !stage_name || !stage_number || !days || !hours || !is_complete || !project_id) {
		return res.status(400).send({ error: 'All values are required' });
	}

	client.query(
		'INSERT INTO stages ( stage_id, stage_name, stage_number, days, hours, is_complete, project_id ) VALUES ($1, $2, $3, $4, $5, $6, $7)',
		[stage_id, stage_name, stage_number, days, hours, is_complete, project_id],
		(error) => {
			if (error) {
				return res.status(500).send({ error: 'Error inserting data into the database' });
			}

			res.status(201).send(`Entry added for stage_id: ${stage_id}`);
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
	const { work_session_id, start_time, end_time, user_id } = req.body;

	if (!work_session_id || !start_time || !end_time || !user_id) {
		return res.status(400).send({ error: 'All values are required' });
	}

	client.query(
		'INSERT INTO work_sessions ( work_session_id, start_time, end_time, user_id ) VALUES ($1, $2, $3, $4)',
		[work_session_id, start_time, end_time, user_id],
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
	console.log('server email is ', email)
	client.query(
		'SELECT * FROM stages WHERE userEmail = $1',
		[email],
		(error, results) => {
			if (error) {
				throw error;
			}
			try {
				res.status(200).json(results.rows);
			} catch (e) {
				console.error(e)
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
