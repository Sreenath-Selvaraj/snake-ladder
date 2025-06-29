const BaseRule = require('./base.rule');

class MustRollOneToStart extends BaseRule {
  constructor() {
    super();
  }

  isApplicable(player, diceRoll) {
      if (!player.hasStarted) {
        return diceRoll === 1;
      }
      return true;
    }
}

module.exports = MustRollOneToStart;
