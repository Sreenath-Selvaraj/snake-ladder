class RuleEngine {
  constructor(board, rules = []) {
    if (!board) {
      throw new Error("Board must be specified");
    }
    this.board = board;
    this.rules = rules;

  }

    evaluateRules(player, roll) {
    return this.rules.reduce((acc, rule) => {
      return { ...acc, ...rule.isApplicable(player, roll) };
    }, {});
  }
}

module.exports = RuleEngine;
