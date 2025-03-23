require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// PostgreSQL Connection
const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
});

// Admin Register Route
app.post('/admin-register', async (req, res) => {
	try {
		const { firstname, lastname, email, password } = req.body;
		const hashedPassword = await bcrypt.hash(password, 10);
		const result = await pool.query(
			"INSERT INTO adminusers (firstname, lastname, email, password) VALUES ($1, $2, $3, $4) RETURNING *",
			[firstname, lastname, email, hashedPassword]
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

// Admin Login Route
app.post('/admin-login', async (req, res) => {
	try {
		const { email, password } = req.body;
		// check if a user with that email exists
		const result = await pool.query(
			"SELECT * FROM adminusers WHERE email = $1",
			[email]
		);
		switch (result.rowCount) {
			case 1:
				const isMatch = await bcrypt.compare(password, result.rows[0].password);
				if (isMatch) {
					res.status(201).json({
						message: 'Admin logged in successfully',
						admin: result.rows[0],
						success: true
					});
					break;
				}
			default:
				res.status(201).json({
					message: 'Email or password is incorrect',
					success: false
				});
				break;
		}
	} catch (err) {
		console.error(err);
		res.status(500).send('Server Error');
	}
});

// Start Server
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
