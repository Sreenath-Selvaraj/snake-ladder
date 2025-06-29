const ExtraTurnOnSixRule = require("../rules/extraTurnOnSix.rule");
const MustRollOneToStartRule = require("../rules/mustRollOneToStart.rule");
const CannotMoveMoreThanSizeRule = require("../rules/cannotMoveMoreThanSize.rule");

class RuleEngine {
  constructor(board) {
    if (!board) {
      throw new Error("Board must be specified");
    }
    this.board = board;
    this.extraTurnOnSixRule = new ExtraTurnOnSixRule();
    this.mustRollOneToStartRule = new MustRollOneToStartRule();
    this.cannotMoveMoreThanSizeRule = new CannotMoveMoreThanSizeRule(this.board);
  }

  evaluateRules(player, roll) {
    const extraTurn = this.extraTurnOnSixRule.isApplicable(roll);
    const mustRollOne = this.mustRollOneToStartRule.isApplicable(player, roll);
    const canMove = this.cannotMoveMoreThanSizeRule.isApplicable(player, roll);

    return { extraTurn, mustRollOne, canMove };
  }
}

module.exports = RuleEngine;
