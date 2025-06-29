class Ladder {
  constructor(start, end) {
    if(!start || !end) {
      throw new Error("Both start and end of the ladder must be specified");
    }
    this.start = start;
    this.end = end;
  }
}
module.exports = Ladder;
