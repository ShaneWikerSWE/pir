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
  project_id text PRIMARY KEY,
  client_email text NOT NULL,
  client_name text NOT NULL,
  user_email text NOT NULL,
  current_stage text NOT NULL DEFAULT 'pending'
);

CREATE TABLE IF NOT EXISTS stages (
stage_id serial PRIMARY KEY,
stage_name text NOT NULL,
stage_number int NOT NULL,
days int NOT NULL,
hours int NOT NULL,
is_complete boolean NOT NULL,
project_id text REFERENCES projects (project_id)
);

CREATE TABLE IF NOT EXISTS project_stages (
project_id text REFERENCES projects (project_id),
stage_id int REFERENCES stages (stage_id),
PRIMARY KEY (project_id, stage_id)
);

CREATE TABLE IF NOT EXISTS work_sessions (
work_session_id serial PRIMARY KEY,
start_time timestamptz NOT NULL,
end_time timestamptz NOT NULL,
user_email text NOT NULL
);

CREATE TABLE IF NOT EXISTS stage_log (
stage_id int REFERENCES stages (stage_id),
work_session_id int REFERENCES work_sessions (work_session_id),
PRIMARY KEY (stage_id, work_session_id)
);`)
module.exports = client;
