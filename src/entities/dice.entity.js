class Dice {
  constructor(faces) {
    if (!faces) {
      throw new Error("Number of faces must be specified");
    }
    this.faces = faces;
  }

  roll() {
    return Math.floor(Math.random() * this.faces) + 1;
  }
}

module.exports = Dice;
