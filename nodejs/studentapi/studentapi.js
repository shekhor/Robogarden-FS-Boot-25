const express = require('express');
const connectionObject = require('./connection');

const app = express();
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


app.post('/students', (req, res) => {
    const { name, address, phone } = req.body;


    const query = 'INSERT INTO student (name, address, phone) VALUES (?, ?, ?)';

    connectionObject.query(query, [name, address, phone], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database insertion error' });
        }
        res.status(201).json({ message: 'Student added successfully', studentId: results.insertId });
    });
});



app.put('/students/:stdId', (req, res) => {

    const stdId = req.params.stdId;     
    const { a1, b1, c1 } = req.body;

    console.log(`Updating student with ID: ${stdId}`);

    const a = 'UPDATE student SET name = ?, address = ?, phone = ? WHERE studentID = ?';

    connectionObject.query(a, [ a1, b1, c1, stdId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database update error' });
        }
        res.json({ message: 'Student updated successfully' });
    });
});


app.delete('/students/:stdId', (req, res) => {
    const stdId = req.params.stdId;

    const query = 'DELETE FROM student WHERE studentID = ?';

    connectionObject.query(query, [stdId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database deletion error' });
        }
        res.json({ message: 'Student deleted successfully' });
    });
});


app.get('/students/:stdId', (req, res) => {
    const stdId = req.params.stdId;

    const sql = 'SELECT * FROM student WHERE studentID = ?';

    connectionObject.query(sql, [stdId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database query error' });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json(results[0]);
    });
});




