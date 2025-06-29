class Snake {
  constructor(head, tail) {
    if(!head || !tail) {
      throw new Error("Both head and tail of the snake must be specified");
    }
    this.head = head;
    this.tail = tail;
  }
}

module.exports = Snake;
