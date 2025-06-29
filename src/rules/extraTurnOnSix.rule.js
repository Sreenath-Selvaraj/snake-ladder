const BaseRule = require('./base.rule');

class ExtraTurnOnSixRule extends BaseRule {
  constructor() {
    super();
  }

  isApplicable(diceRoll) {
    if (diceRoll === 6) {
      return { extraTurn: true };
    }
    return { extraTurn: false };
  }
}

module.exports = ExtraTurnOnSixRule;
