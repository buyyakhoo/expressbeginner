const express = require('express');
const path = require('path');
const users = require('./users');

const app = express();

const logger = (req, res, next) => {
    console.log('Hello!');
    next();
}

//init middleware
app.use(logger);

//get all users
app.get('/api/users', (req, res) => res.json(users));

/*
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})
*/

//set static folder
app.use(express.static(path.join(__dirname, 'public')));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));