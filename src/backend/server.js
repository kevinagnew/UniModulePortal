require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// PostgreSQL Connection
const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
});

// Test Route
app.get('/api/users', async (req, res) => {
	try {
		const result = await pool.query('SELECT * FROM users');
		res.json(result.rows);
	} catch (err) {
		console.error(err);
		res.status(500).send('Server Error');
	}
});

// Test Route
app.get('/api', async (req, res) => {
	try {
		//   const result = await pool.query('SELECT * FROM users');
		res.json('Hello world');
	} catch (err) {
		console.error(err);
		res.status(500).send('Server Error');
	}
});

// Admin Register Route
app.post('/admin-register', async (req, res) => {
	try {
		const { firstname, lastname, email, password } = req.body;
		const result = await pool.query(
			"INSERT INTO adminusers (firstname, lastname, email, password) VALUES ($1, $2, $3, $4) RETURNING *",
			[firstname, lastname, email, password]
		);
		res.status(201).json({
			message: 'Admin registered successfully',
			admin: result.rows[0],
		});
	} catch (err) {
		console.error(err);
		res.status(500).send('Server Error');
	}
});

// Start Server
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
