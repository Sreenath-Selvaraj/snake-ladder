class Board {
  constructor(size, snakes, ladders) {
    if(!size || size <= 0) {
      throw new Error("Board size must be a positive integer");
    }
    if(!snakes || !Array.isArray(snakes)) {
      throw new Error("Snakes must be an array");
    }
    if(!ladders || !Array.isArray(ladders)) {
      throw new Error("Ladders must be an array");
    }
    this.size = size;
    this.snakes = snakes
    this.ladders = ladders
    this.snakesMap = this.initializeSnakesMap(snakes);
    this.laddersMap = this.initializeLaddersMap(ladders);
  }

  initializeSnakesMap(snakes) {
    const map = new Map
    for(const snake of snakes) {
      if(!snake.head || !snake.tail) {
        throw new Error("Each snake must have a head and a tail");
      }
      if(snake.head <= snake.tail || snake.head > this.size || snake.tail < 1) {
        throw new Error(`Invalid snake configuration ${snake.head} -> ${snake.tail}`);
      }
      map.set(snake.head, snake.tail);
    }
    return map;
  }

  initializeLaddersMap(ladders) {
    const map = new Map
    for(const ladder of ladders) {
      if(!ladder.start || !ladder.end) {
        throw new Error("Each ladder must have a start and an end");
      }
      if(ladder.start >= ladder.end || ladder.start > this.size || ladder.end < 1) {
        throw new Error(`Invalid ladder configuration ${ladder.start} -> ${ladder.end}`);
      }
      map.set(ladder.start, ladder.end);
    }
    return map;
  }

  applySnakesAndLadders(position) {
    if(this.snakesMap.has(position)) {
      return this.snakesMap.get(position);
    }
    if(this.laddersMap.has(position)) {
      return this.laddersMap.get(position);
    }
    return position;
  }

}

module.exports = Board;
