class Player {
  constructor(name) {
    if(!name) {
      throw new Error("Player name must be specified");
    }
    this.name = name;
    this.position = 0;
    this.hasStarted = false;
    this.hasWon = false;
  }

  setPosition(position) {
    this.position = position;
  }

}

module.exports = Player;
