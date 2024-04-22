const express = require('express');
const submit = require('./routes/submit');
const path = require('path');
const portal = require('./routes/portal');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const d1 = require('./routes/d6');

const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', submit);
app.use('/', portal);
app.use('/',d1);
app.use(express.static(path.join(__dirname, 'frontend', 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
