const gamesRouter = require('express').Router();

gamesRouter.get('/games', (req, res) => {
    res.send([])
})

gamesRouter.post('/games', (req, res) => {
    console.log(req.body);
    res.send([])
});

module.exports = gamesRouter;