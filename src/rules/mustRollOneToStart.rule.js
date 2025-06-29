const BaseRule = require('./base.rule');

class MustRollOneToStart extends BaseRule {
  constructor() {
    super();
  }

  isApplicable(player, diceRoll) {
      if (!player.hasStarted) {
        return { canStart: diceRoll === 1 };
      }
      return { canStart: true };
    }
}

module.exports = MustRollOneToStart;
