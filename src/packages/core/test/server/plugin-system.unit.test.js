/* eslint-disable class-methods-use-this */
/* eslint-disable jest/expect-expect */
const mongoose = require('mongoose');

const EazinBaseModel = require('../../server/BaseModel');
const prepare = require('../../../../../test/server/prepare-server');

const {
  Schema,
} = mongoose;

// # Plugin A #########################

const modelASchema = new Schema({
  stringProp: String,
});

class ModelAClass extends EazinBaseModel {
  static get isModelA() { return true; }

  get isModelADocument() { return true; }
}

modelASchema.loadClass(ModelAClass);

const preSaveHook = jest.fn();
const postSaveHook = jest.fn();
modelASchema.pre('save', preSaveHook);
modelASchema.post('save', postSaveHook);

const preRemoveHook = jest.fn();
const postRemoveHook = jest.fn();
modelASchema.pre('remove', preRemoveHook);
modelASchema.post('remove', postRemoveHook);

// const modelAToJSON = jest.fn(function toJSON(opts = {}) {
//   return this.toObject(opts);
// });
// modelASchema.methods.toJSON = modelAToJSON;

const pluginA = {
  schemas: [
    {
      modelName: 'ModelA',
      schema: modelASchema,
    },
  ],
};

// # Plugin B #########################

let modelAToJSONOverride;
const schemaPlugin1 = jest.fn((schema) => {
  schema.add({
    addedByB: Number,
  });

  const { toJSON: original } = schema.methods;
  modelAToJSONOverride = jest.fn(function toJSON() {
    const result = original.call(this);
    result.addedByPluginBAtJSON = true;
    return result;
  });
  schema.method('toJSON', modelAToJSONOverride);
});

const schemaPlugin2 = jest.fn();

const modelBSchema = new Schema({
  stringProp: String,
  refToA: { type: 'ObjectId', ref: 'ModelA' },
});

const pluginB = {
  schemas: [
    {
      modelName: 'ModelB',
      schema: modelBSchema,
    },
  ],
  schemaPlugins: [
    {
      modelName: 'ModelA',
      plugin: schemaPlugin1,
    },
    {
      modelName: '*',
      plugin: schemaPlugin2,
    },
  ],
};

describe('plugin system', () => {
  let testSetup;
  beforeAll(async () => {
    testSetup = await prepare({
      plugins: [
        pluginA,
        pluginB,
      ],
    });
  });

  afterAll(() => testSetup.tearDown());

  it('uses mongoose plugins', () => {
    expect(testSetup).toHaveProperty('app.get');
    expect(testSetup.app.get('db')).toHaveProperty('models');

    const { models } = testSetup.app.get('db');
    expect(models).toHaveProperty('ModelA');
    expect(models).toHaveProperty('ModelB');

    expect(schemaPlugin1).toHaveBeenCalledTimes(1);
    expect(schemaPlugin2).toHaveBeenCalledTimes(2);
  });

  it('extends the EazinBaseModel', async () => {
    const { ModelA } = testSetup.app.get('db').models;

    const docA = new ModelA({ stringProp: 'abcd', addedByB: 1 });

    expect(docA.eazinDocument).toBe(true);
    expect(docA.isModelADocument).toBe(true);
    expect(docA.stringProp).toBe('abcd');
    expect(docA.addedByB).toBe(1);

    await docA.save();

    expect(preSaveHook).toHaveBeenCalledTimes(1);
    expect(postSaveHook).toHaveBeenCalledTimes(1);
  });

  it('can override the .toJSON() method of an instance', () => {
    const { ModelA } = testSetup.app.get('db').models;
    const docA = new ModelA({ stringProp: 'abcd', addedByB: 1 });

    // modelAToJSON.mockClear();
    modelAToJSONOverride.mockClear();

    const obj = docA.toJSON();

    // expect(modelAToJSON)
    //   .toHaveBeenCalledTimes(1);
    expect(modelAToJSONOverride)
      .toHaveBeenCalledTimes(1);

    expect(obj).toHaveProperty('addedByPluginBAtJSON', true);
  });
});
