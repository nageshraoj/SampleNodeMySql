const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname)); // Serve static files

// MySQL Connection
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',         // Your MySQL username
    password: 'admin', // Your MySQL password
    database: 'woxen_csp' // Your MySQL database name
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// Route for handling student registration
app.post('/register', (req, res) => {
    const { studName, email, strongSub, strongSubtop, weakSub, weakSubtop, descriptionstu, student } = req.body;

    const query = `
        INSERT INTO student_reg (studName, email, strongSub, strongSubtop, weakSub, weakSubtop, descriptionstu, student)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(query, [studName, email, strongSub, strongSubtop, weakSub, weakSubtop, descriptionstu, student], (err, result) => {
        if (err) {
            console.error('Error inserting data into database:', err);
            return res.status(500).json({ success: false, message: 'Database error: ' + err.message });
        }
        res.status(200).json({ success: true, message: 'Student registered successfully' });
    });
});

// Default route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // Serve the HTML file
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
