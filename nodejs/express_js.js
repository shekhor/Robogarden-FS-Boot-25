const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(customMiddleware)

const PORT = 4000;

function customMiddleware(req, res, next) {
    console.log('Custom Middleware Executed');
    console.log(`Request Method: ${req}, Request URL: ${req.url}`);
    next();
}

app.get('/home/:car_type/:car_model', (req, res) => {
    const { car_type, car_model } = req.params;
    res.send(`Hello it's response from server: Car Type: ${car_type}, Car Model: ${car_model}`);
});

app.get('/', (req, res) => {
    res.send('Hello World! This is the home route.');
});

app.get('/home', (req, res) => {

    const {order_by, sort_by} = req.query;

    res.send(`Hello it's response from server: Order By: ${order_by}, Sort By: ${sort_by}`);
});


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});