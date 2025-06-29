const BaseRule = require('./base.rule');

class CannotMoveMoreThanSizeRule extends BaseRule {
  constructor(board) {
    super()
    this.board = board;
  }

  isApplicable(player, roll) {
    const newPosition = player.position + roll;
    if (newPosition > this.board.size) {
      return false
    }
    return true
  }
}

module.exports = CannotMoveMoreThanSizeRule;
