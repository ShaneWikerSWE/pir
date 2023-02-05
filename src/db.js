const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
	user: 'postgres',
	password: process.env.db_password,
	host: 'localhost',
	port: 5432,
	database: 'pir'
});

client.connect()
	.then(() => console.log('Connected to the pir database'))
	.catch(err => console.error('Connection error', err.stack));

client.query(`CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  userEmail TEXT NOT NULL,
  clientName TEXT NOT NULL,
  clientEmail TEXT NOT NULL,
  stageName TEXT NOT NULL,
  stageNumber INTEGER NOT NULL,
  days INTEGER NOT NULL,
  hours INTEGER NOT NULL,
  isCurrent BOOLEAN NOT NULL
);`)
module.exports = client;
