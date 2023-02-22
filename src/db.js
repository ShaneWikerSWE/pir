const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
	user: 'postgres',
	password: '',
	host: 'localhost',
	port: 5432,
	database: 'pir'
});

client.connect()
	.then(() => console.log('Connected to the pir database'))
	.catch(err => console.error('Connection error', err.stack));

client.query(`CREATE TABLE IF NOT EXISTS projects (
  project_id SERIAL PRIMARY KEY,
  project_name TEXT NOT NULL,
  project_number INTEGER NOT NULL,
  client_email TEXT NOT NULL,
  client_name TEXT NOT NULL,
  user_email TEXT NOT NULL,
  current_stage TEXT NOT NULL DEFAULT 'pending'
);

CREATE TABLE IF NOT EXISTS stages (
  stage_id SERIAL PRIMARY KEY,
  stage_name TEXT NOT NULL,
  stage_number INT NOT NULL,
  days INT NOT NULL,
  hours INT NOT NULL,
  is_complete BOOLEAN NOT NULL DEFAULT false,
  project_id INTEGER REFERENCES projects (project_id)
);

CREATE TABLE IF NOT EXISTS project_stages (
  project_id SERIAL REFERENCES projects (project_id),
  stage_id SERIAL REFERENCES stages (stage_id),
  PRIMARY KEY (project_id, stage_id)
);

CREATE TABLE IF NOT EXISTS work_sessions (
  work_session_id SERIAL PRIMARY KEY,
  start_time TIMESTAMPTZ NOT NULL,
  end_time TIMESTAMPTZ NOT NULL,
  user_email TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS stage_log (
  stage_id SERIAL REFERENCES stages (stage_id),
  work_session_id INT REFERENCES work_sessions (work_session_id),
  PRIMARY KEY (stage_id, work_session_id)
);`)
module.exports = client;
