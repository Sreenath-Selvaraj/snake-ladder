class BaseRule {
  constructor() {
    if (this.constructor === BaseRule) {
      throw new Error("BaseRule is an abstract class and cannot be instantiated directly.");
    }
  }

  isApplicable() {
    throw new Error("isApplicable method must be implemented in derived classes.");
  }

}

module.exports = BaseRule;
