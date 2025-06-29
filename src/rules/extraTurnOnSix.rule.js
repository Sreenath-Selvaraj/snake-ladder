const BaseRule = require('./base.rule');

class ExtraTurnOnSixRule extends BaseRule {
  constructor() {
    super();
  }

  isApplicable(diceRoll) {
    if (diceRoll === 6) {
      return true;
    }
    return false;
  }
}

module.exports = ExtraTurnOnSixRule;
