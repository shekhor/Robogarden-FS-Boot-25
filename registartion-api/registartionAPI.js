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


app.post('/student', (req, res) => {
    const { name, email } = req.body;

    const query = 'INSERT INTO student (name, email) VALUES (?, ?)';

    connectionObject.query(query, [name, email], (err, results) => {
        if (err) {
            console.error('Error inserting student:', err);
            res.status(500).json({ error: 'Database error' });
        } else {
            res.status(201).json({ message: 'Student registered successfully', studentId: results.insertId });
        }
    });
});

app.get('/students', (req, res) => {
    const query = 'SELECT id FROM student';

    connectionObject.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching students:', err);
            res.status(500).json({ error: 'Database error' });
        } else {
            res.status(200).json(results);
        }
    });
});

app.post('/course', (req, res) => {
    const { title, instructor, description } = req.body;

    const query = 'INSERT INTO course (title, instructor, description) VALUES (?, ?, ?)';

    connectionObject.query(query, [title, instructor, description], (err, results) => {
        if (err) {
            console.error('Error inserting course:', err);
            res.status(500).json({ error: 'Database error' });
        } else {
            res.status(201).json({ message: 'Course added successfully', courseId: results.insertId });
        }
    });
});

app.get('/courses', (req, res) => {
    const query = 'SELECT * FROM course';

    connectionObject.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching courses:', err);
            res.status(500).json({ error: 'Database error' });
        } else {
            res.status(200).json(results);
        }
    });
});

app.post('/enroll', (req, res) => {

    const { studentId, courseIds } = req.body;

    const values = courseIds.map(courseId => [studentId, courseId]);

    const query = 'INSERT INTO registration (student_id, course_id) VALUES ?';

    connectionObject.query(query, [values], (err, results) => {
        if (err) {
            console.error('Error enrolling student:', err);
            res.status(500).json({ error: 'Database error' });
        } else {
            res.status(201).json({ message: 'Student enrolled successfully' });
        }
    }); 
});