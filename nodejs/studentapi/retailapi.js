const express = require('express');
const connectionObject = require('./connection');

const app = express();
app.use(express.json());
const PORT = 4000;


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});

app.get('/customers', (req, res) => { 
    const p1 = 'SELECT * FROM customers';
    connectionObject.query(p1, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database query error' });
        }
        res.json(results);
    });
});

app.get('/customers/:custId', (req, res) => {
    const custId = req.params.custId;
    const q2 = 'SELECT * FROM customers WHERE customerID = ?';
    connectionObject.query(q2, [custId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database query error' });
        }
        res.json(results);
    });
});


app.post('/customers', (req, res) => {
    const { name, phone, address } = req.body;
    const q3 = 'INSERT INTO customers (name, phone, address) VALUES (?, ?, ?)';

    connectionObject.query(q3, [name, phone, address], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database insertion error' });
        }
        res.status(201).json({ message: 'Customer added successfully', customerId: results.insertId });
    }
    );
});