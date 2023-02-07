const express = require('express');
const client = require('./db');
const cors = require('cors');

const bodyParser = require('body-parser');
const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));

const port = 4000;

app.use(bodyParser.json());

app.post('/users', (req, res) => {
	const { userEmail, clientName, clientEmail, stageName, stageNumber, days, hours, isCurrent } = req.body;
	client.query(
		'INSERT INTO users (userEmail, clientName, clientEmail, stageName, stageNumber, days, hours, isCurrent) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
		[userEmail, clientName, clientEmail, stageName, stageNumber, days, hours, isCurrent],
		(error) => {
			if (error) {
				throw error;
			}
			try {
				res.status(201).send(`Entry added for user email: ${userEmail}`);
			} catch (e) {
				console.error(e)
			}
		}
	);
});

app.get('/users/:email', (req, res) => {
	const email = req.params.email;
	console.log('server email is ', email)
	client.query(
		'SELECT * FROM users WHERE userEmail = $1',
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

// const data = {
// 	userEmail: 'example@email.com',
// 	clientName: 'Client Name',
// 	clientEmail: 'client@email.com',
// 	stageName: 'Stage Name',
// 	stageNumber: 1,
// 	days: 5,
// 	hours: 10,
// 	isCurrent: true
// };

// axios.post('http://localhost:' + port + '/users', data)
// 	.then(res => {
// 		console.log(res.data);
// 	})
// 	.catch(error => {
// 		console.error(error);
// 	});

