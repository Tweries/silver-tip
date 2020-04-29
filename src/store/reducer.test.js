import reducer, {
  CHANGE_BIO,
  CHANGE_NAME,
  CHANGE_URL,
  CLEAR_ALL,
  emptyState
} from './reducer';

const BIO = 'CEO of Microsoft';
const NAME = 'Satya Nadella';
const URL = 'https://www.microsoft.com/en-us/';
const UNKNOWN = 'UNKNOWN';

describe('reducer', () => {
  const scenarios = [
    {
      action: { type: CHANGE_BIO, value: BIO },
      description: `action type: ${CHANGE_BIO}`,
      newState: { ...emptyState, bio: BIO },
      state: { ...emptyState }
    },
    {
      action: { type: CHANGE_NAME, value: NAME },
      description: `action type: ${CHANGE_NAME}`,
      newState: { ...emptyState, name: NAME },
      state: { ...emptyState }
    },
    {
      action: { type: CHANGE_URL, value: URL },
      description: `action type: ${CHANGE_URL}`,
      newState: { ...emptyState, url: URL },
      state: { ...emptyState }
    },
    {
      action: { type: CLEAR_ALL },
      description: `action type: ${CLEAR_ALL}`,
      newState: { ...emptyState },
      state: {
        ...emptyState,
        bio: BIO,
        name: NAME,
        url: URL
      }
    },
    {
      action: { type: UNKNOWN },
      description: `action type: ${UNKNOWN}`,
      newState: { ...emptyState },
      state: { ...emptyState }
    }
  ];

  scenarios.forEach(({ action, description, newState, state }) => {
    it(description, () => {
      expect(reducer(state, action)).toEqual(newState);
    });
  });
});
