class BaseRule {
  constructor() {
    if (this.constructor === BaseRule) {
      throw new Error("BaseRule is an abstract class and cannot be instantiated directly.");
    }
  }

}

module.exports = BaseRule;
