const config = require('config');
const Board = require('./src/entities/board.entity');
const Dice = require('./src/entities/dice.entity');
const Player = require('./src/entities/player.entity');
const Snake = require('./src/entities/snake.entity');
const Ladder = require('./src/entities/ladder.entity');
const GameEngine = require('./src/core/gameEngine');

function initializeGame() {
  const snakes = config.get('snakes');
  const ladders = config.get('ladders');
  const players = config.get('default_players');
  const dice_faces = config.get('dice_faces');
  const board_size = config.get('board_size');


  const Players = [];
  const Snakes = [];
  const Ladders = [];

  for (const player of players) {
    Players.push(new Player(player));
  }
  for (const snake of snakes) {
    Snakes.push(new Snake(snake.head, snake.tail));
  }
  for( const ladder of ladders) {
    Ladders.push(new Ladder(ladder.start, ladder.end));
  }

  const board = new Board(board_size, Snakes, Ladders, Players);
  const dice = new Dice(dice_faces);
  const gameEngine = new GameEngine(Players, dice, board, 0);
  const result = gameEngine.startGame();
  console.log(result);
}

initializeGame();