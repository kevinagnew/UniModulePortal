require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;
const SECRET_KEY = process.env.JWT_SECRET;

// Middleware
app.use(cors());
app.use(express.json());

// PostgreSQL Connection
const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
});

// Example: Protecting a route
app.get('/protected', verifyToken, (req, res) => {
    res.json({ message: 'You have access to this protected route', user: req.user });
});

function verifyToken(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(403).json({ error: 'Access denied' });

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) return res.status(401).json({ error: 'Invalid token' });
        req.user = decoded;
        next();
    });
}

// Admin Register Route
app.post('/admin-register', async (req, res) => {
	try {
		const { firstname, lastname, email, password } = req.body;
		// TODO: validation/verification checks
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
					const token = jwt.sign({ id: result.rows[0].admin_id, email: result.rows[0].email }, SECRET_KEY, { expiresIn: '1h' });
					res.status(201).json({
						message: 'Admin logged in successfully',
						admin: result.rows[0],
						token: token,
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

// Student Register Route
app.post('/student-register', async (req, res) => {
	try {
		const { firstname, lastname, email, password, birthday, student_identifier } = req.body;
		// TODO: validation/verification checks
		const hashedPassword = await bcrypt.hash(password, 10);
		const result = await pool.query(
			"INSERT INTO students (firstname, lastname, email, birthday, password, student_identifier) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
			[firstname, lastname, email, birthday, hashedPassword, student_identifier]
		);
		res.status(201).json({
			message: 'Student registered successfully',
			student: result.rows[0],
		});
	} catch (err) {
		console.error(err);
		res.status(500).send('Server Error for Student Register');
	}
});

app.post('/update-student-identification', async (req, res) => {
	try {
		const { student_id, student_identifier } = req.body;
		const result = await pool.query(
			"UPDATE students SET student_identifier = $2 WHERE student_id = $1",
			[student_id, student_identifier]
		);
		res.status(201).json({
			message: 'Student successfully updated',
			student: result
		});
	} catch (err) {
		console.error(err);
		res.status(500).send('Server Error for Update Student Identification');
	}
});

app.get('/view-student/:student_identifier', async (req, res) => {
	try {
		const result = await pool.query(
			"SELECT * FROM students WHERE student_identifier = $1",
			[req.params.student_identifier]
		);
		res.status(201).json({
			message: 'Student successfully returned',
			student: result.rows[0]
		});
	} catch (err) {
		console.error(err);
		res.status(500).send('Server Error for Get Student');
	}
});

// Student Routes

// Student Login Route
app.post('/student-login', async (req, res) => {
	try {
		const { student_identifier, password } = req.body;
		// check if a user with that email exists
		const result = await pool.query(
			"SELECT * FROM students WHERE student_identifier = $1",
			[student_identifier]
		);
		switch (result.rowCount) {
			case 1:
				const isMatch = await bcrypt.compare(password, result.rows[0].password);
				if (isMatch) {
					const token = jwt.sign({ id: result.rows[0].student_id, email: result.rows[0].student_identifier }, SECRET_KEY, { expiresIn: '1h' });
					res.status(201).json({
						message: 'Student logged in successfully',
						student: result.rows[0],
						token: token,
						success: true
					});
					break;
				}
			default:
				res.status(201).json({
					message: 'ID or password is incorrect',
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
