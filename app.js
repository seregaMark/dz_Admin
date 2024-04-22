const PORT = 3005;

const fs = require('fs').promises;
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const gamesRouter = require('./routes/games');
const { cors } = require('./middlewares/cors');

const app = express();

app.use(cors, bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(gamesRouter);

app.listen(PORT, () => {
    console.log(`server popushen ${PORT}`);
});