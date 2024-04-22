const PORT = 3005;

const fs = require('fs').promises;
const express = require('express')

const app = express();

app.get('/', async (req, res) => {
    const data = await fs.readFile('./public/index.html', 'utf-8')
    res.getHeader('Content-Type', 'text/html');
    res.send(data);
});

app.get('/styles/style.css', async (req, res) => {
    const data = await fs.readFile('./public/styles/style.css', 'utf-8')
    res.getHeader('Content-Type', 'text/css');
    res.send(data);
});

app.listen(PORT, () => {
    console.log(`server popushen ${PORT}`);
});