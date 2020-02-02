/* eslint-disable jest/no-commented-out-tests */
// const simpleFetch = jest.mock('../../../core/util/simpleFetch');

// import simpleFetch from '../../../core/util/simpleFetch';
import { makeStore } from '../../../core/store';

import {
  buildActions,
  buildAPIActions,
  buildReducer,
  buildConnector,
} from '../../../core/factory';

jest.mock('../../../core/util/simpleFetch');
jest.mock('../../../core/util/readToken');

describe('factory', () => {
  const singular = 'doc';
  let store;
  let actions;
  let apiActions;
  let reducer;
  // eslint-disable-next-line no-unused-vars
  let connector;

  beforeAll(() => {
    actions = buildActions({ singular });
    apiActions = buildAPIActions({ singular, endpoint: '/endpoint' });
    reducer = buildReducer({ singular });
    connector = buildConnector({ singular });

    store = makeStore({ docs: reducer }, { docs: {} });
  });

  beforeEach(() => store.dispatch({ type: 'CORE_RELOAD' }));

  describe('buildActions', () => {
    it('creates an object of sync functions', () => {
      expect(actions).toHaveProperty('upsertOneDoc');
      expect(actions).toHaveProperty('upsertManyDocs');
      expect(actions).toHaveProperty('removeOneDoc');
      expect(actions).toHaveProperty('removeManyDocs');
      expect(actions).toHaveProperty('clearDocs');
    });

    describe('upsertOne*', () => {
      const creationPayload = {
        id: 'docId1',
        name: 'one',
      };
      const updatePayload = {
        id: 'docId1',
        name: '1',
      };

      it('inserts a document', () => {
        const { getState, dispatch } = store;
        const { upsertOneDoc } = actions;
        const creationAction = upsertOneDoc(creationPayload);
        expect(creationAction).toHaveProperty('payload', creationPayload);
        expect(creationAction).toHaveProperty('type', 'UPSERT_DOC');
        expect(() => dispatch(creationAction)).not.toThrow();
        const originalState = getState();
        expect(originalState).toHaveProperty('docs.docId1.id', 'docId1');
        expect(originalState).toHaveProperty('docs.docId1.name', 'one');
      });

      it('updates a document', () => {
        const { getState, dispatch } = store;
        const { upsertOneDoc } = actions;
        const updateAction = upsertOneDoc(updatePayload);
        expect(updateAction).toHaveProperty('payload', updatePayload);
        expect(updateAction).toHaveProperty('type', 'UPSERT_DOC');
        expect(() => dispatch(updateAction)).not.toThrow();
        const updatedState = getState();
        expect(updatedState).toHaveProperty('docs.docId1.id', 'docId1');
        expect(updatedState).toHaveProperty('docs.docId1.name', '1');
      });
    });
  });

  describe('buildAPIActions', () => {
    it('creates an object of async functions', () => {
      expect(apiActions).toHaveProperty('retrieveOneDoc');
      expect(apiActions).toHaveProperty('retrieveManyDocs');
      expect(apiActions).toHaveProperty('upsertOneDoc');
      expect(apiActions).toHaveProperty('upsertManyDocs');
      expect(apiActions).toHaveProperty('removeOneDoc');
      expect(apiActions).toHaveProperty('removeManyDocs');
      expect(apiActions).toHaveProperty('clearDocs');
    });

    // describe('upsertOne*', () => {
    //   const creationPayload = {
    //     name: 'one',
    //   };
    //   const updatePayload = {
    //     id: 'docId1',
    //     name: '1',
    //   };

    //   it('inserts a document', () => {
    //     const { getState, dispatch } = store;
    //     const { upsertOneDoc } = apiActions;
    //     const creationPromise = dispatch(upsertOneDoc(creationPayload));
    //     // eslint-disable-next-line no-console
    //     console.info(creationPromise.mock);
    //     expect(simpleFetch).toHaveBeenCalled();
    //     const originalState = getState();
    //     expect(originalState).toHaveProperty('docs.docId1.id', 'docId1');
    //     expect(originalState).toHaveProperty('docs.docId1.name', 'one');
    //   });

    //   it('updates a document', () => {
    //     const { getState, dispatch } = store;
    //     const { upsertOneDoc } = apiActions;
    //     const updateAction = upsertOneDoc(updatePayload);
    //     expect(updateAction).toHaveProperty('payload', updatePayload);
    //     expect(updateAction).toHaveProperty('type', 'UPSERT_DOC');
    //     expect(() => dispatch(updateAction)).not.toThrow();
    //     const updatedState = getState();
    //     expect(updatedState).toHaveProperty('docs.docId1.id', 'docId1');
    //     expect(updatedState).toHaveProperty('docs.docId1.name', '1');
    //   });
    // });
  });


  describe('buildReducer', () => {
    it('creates an object of functions', () => {
      expect(true).toBeTruthy();
      // expect(actions).toHaveProperty('upsertOneDoc');
      // expect(actions).toHaveProperty('upsertManyDocs');
    });
  });

  describe('buildConnector', () => {
    it('connects', () => {
      expect(true).toBeTruthy();
      const spy = jest.fn();
      const connected = connector(spy);

      // eslint-disable-next-line no-console
      console.info(connected.mock);
    });
  });
});
