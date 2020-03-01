/* eslint-disable class-methods-use-this */
module.exports = class EazinModelBase {
  static get eazinModel() { return true; }

  get eazinDocument() { return true; }

  patch() {}

  patchable = [];

  toJSON(options) {
    const { _id: id, ...rest } = this.toObject(options);
    return { id, ...rest };
  }
};
