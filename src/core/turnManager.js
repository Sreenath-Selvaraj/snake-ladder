class TurnManager {
  constructor(players, startIndex = 0) {
    this.players = players;
    this.currentPlayerIndex = startIndex;
  }

  getCurrentPlayer() {
    return this.players[this.currentPlayerIndex];
  }

  nextTurn() {
    this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
  }


}

module.exports = TurnManager;
