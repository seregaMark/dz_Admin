const gamesRouter = require("express").Router();
const { deleteGame, sendAllGames, addGameController } = require('../controllers/games');

gamesRouter.get("/games", sendAllGames, addGameController)
gamesRouter.delete("/games/:id", deleteGame, addGameController);
gamesRouter.post('/games', addGameController, addGameController)

module.exports = gamesRouter;
