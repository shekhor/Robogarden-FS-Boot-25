const express = require('express');
const connectionObject = require('./connection');

const cors = require('cors');
const app = express();
app.use(cors());

app.use(express.json());

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});

app.get('/students', (req, res) => { 
    const query = 'SELECT * FROM student';
    connectionObject.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database query error' });
        }
        res.json(results);
    });
});

app.get('/students/:id', (req, res) => { 
    const studentID = req.params.id;
    console.log('Student ID received:', studentID);

    const query = 'SELECT * FROM student WHERE studentID = ?';
    connectionObject.query(query, [studentID], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database query error' });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.json(results[0]);
    });
});

app.post('/students', (req, res) => {
    const { studentname, studentaddress, studentphone } = req.body;

    const query = 'INSERT INTO student (name, address, phone) VALUES (?, ?, ?)';
    connectionObject.query(query, [studentname, studentaddress, studentphone], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database insert error' });
        }
        res.status(201).json({ message: 'Student added successfully', studentID: results.insertId });
    });
});

app.put('/students/:id', (req, res) => {
    const studentID = req.params.id;
    const { name, address, phone } = req.body;

    const query = 'UPDATE student SET name = ?, address = ?, phone = ? WHERE studentID = ?';
    connectionObject.query(query, [name, address, phone, studentID], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database update error' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.json({ message: 'Student updated successfully' });
    });
});