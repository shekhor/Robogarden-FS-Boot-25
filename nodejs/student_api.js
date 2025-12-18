const express = require('express');

const app = express();
app.use(express.json());
const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});

let students = [{ id: 1, name: 'John Doe', age: 20 }, 
    { id: 2, name: 'Jane Smith', age: 22 },
    { id: 3, name: 'Alice Johnson', age: 19 }];


app.get('/students', (req, res) => {    
    res.json(students);
});

app.post('/students', (req, res) => {
    const newStudent = req.body;
    students.push(newStudent);
    res.status(201).json(newStudent);
});

app.get('/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id);

    let student;

    for(obj of students){
        if(obj.id === studentId){
            student = obj;
            console.log("Student found:", obj);
        }
    }

    if (student) {
        res.status(200).json(student);
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
});

app.put('/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id);

    const updatedStudent = req.body;

    let studentIndex = -1;

    for(let i=0; i<students.length; i++){
        if(students[i].id === studentId){
            studentIndex = i;
            console.log("Student found at index:", i);
        }
    }

    if (studentIndex != -1) {
        students[studentIndex] = updatedStudent;        
        res.status(200).json(updatedStudent);
    }else {
        res.status(404).json({ message: 'Student not found'});
    }
});

app.patch('/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const updatedFields = req.body;

    let student;

    for(let i=0; i<students.length; i++){
        if(students[i].id === studentId){
            student = students[i];
            console.log("Student found at index:", i);
            for(let key in updatedFields){
                student[key] = updatedFields[key];
            }
        }
    }

    if (student) {
        res.status(200).json(student);
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
});

app.delete('/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id);

    let studentIndex = -1;

    for(let i=0; i<students.length; i++){
        if(students[i].id === studentId){
            studentIndex = i;
            console.log("Student found at index:", i);
        }
    }

    if (studentIndex != -1) {
        students.splice(studentIndex, 1);        
        res.status(200).json({ message: 'Student deleted successfully' });
    }   else {     
        res.status(404).json({ message: 'Student not found' });
    }
});









    
