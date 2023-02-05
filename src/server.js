const express = require('express');
const client = require('./db');
const axios = require('axios');

const bodyParser = require('body-parser');
const app = express();
const port = 4000;

app.use(bodyParser.json());

app.post('/users', (req, res) => {
	const { userEmail, clientName, clientEmail, stageName, stageNumber, days, hours, isCurrent } = req.body;
	console.log(req.body)
	client.query(
		'INSERT INTO users (userEmail, clientName, clientEmail, stageName, stageNumber, days, hours, isCurrent) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
		[userEmail, clientName, clientEmail, stageName, stageNumber, days, hours, isCurrent],
		(error) => {
			if (error) {
				throw error;
			}
			res.status(201).send(`Entry added for user email: ${userEmail}`);
		}
	);
});

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});

const data = {
	userEmail: 'example@email.com',
	clientName: 'Client Name',
	clientEmail: 'client@email.com',
	stageName: 'Stage Name',
	stageNumber: 1,
	days: 5,
	hours: 10,
	isCurrent: true
};

axios.post('http://localhost:' + port + '/users', data)
	.then(res => {
		console.log(res.data);
	})
	.catch(error => {
		console.error(error);
	});
