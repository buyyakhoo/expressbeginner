const express = require('express');
const router = express.Router();
const path = require('path');

const moment = require('moment');
const logger = require('./middleware/logger');

const app = express();


//init middleware
//app.use(logger);

//body parse middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));


app.use('/api/users', require('./routes/api/users'));



/*
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})
*/

//set static folder
app.use(express.static(path.join(__dirname, 'public')));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));