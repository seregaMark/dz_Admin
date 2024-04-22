const PORT = 3005;

const fs = require('fs').promises;
const express = require('express');
const path = require('path');

const app = express();

// app.get('/', async (req, res) => {
//     const data = await fs.readFile('./public/index.html', 'utf-8')
//     res.getHeader('Content-Type', 'text/html');
//     res.send(data);
// });

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`server popushen ${PORT}`);
});