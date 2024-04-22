const PORT = 3005;

const fs = require('fs').promises;
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/games', (req, res) => {
    res.send([])
})

app.post('/games', (req, res) => {
    console.log(req.body);
    res.send([])
})

app.listen(PORT, () => {
    console.log(`server popushen ${PORT}`);
});