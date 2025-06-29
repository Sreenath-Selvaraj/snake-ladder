const config = require('config');
const TurnManager = require('./turnManager');
const RuleEngine = require('./ruleEngine');

class GameEngine {
  constructor({players, dice, board, startIndex, rules}) {
    this.players = players;
    this.dice = dice;
    this.board = board;
    this.isGameOver = false;
    this.turnManager = new TurnManager(this.players, startIndex);
    this.ruleEngine = new RuleEngine(this.board, rules);
  }

  startGame() {
    while (!this.isGameOver) {
      const player = this.turnManager.getCurrentPlayer();
      const roll = this.dice.roll();
      const { extraTurn, canStart, canMove } = this.ruleEngine.evaluateRules(player, roll);

      let newPosition = player.position + roll;
      newPosition = this.board.applySnakesAndLadders(newPosition);

      if (!player.hasStarted && canStart) {
        player.hasStarted = true;
        player.setPosition(newPosition);
      } else if (canMove) {
        player.setPosition(newPosition);
      }
      if (player.position === this.board.size) {
        player.hasWon = true;
        this.isGameOver = true;
        return {
          winner: player.name,
        };
      }
      if (!extraTurn) {
        this.turnManager.nextTurn();
      }
    }
  }

}

module.exports = GameEngine;

