import makeHandleOnChange from './makeHandleOnChange';
import {
  CHANGE_BIO,
  CHANGE_NAME,
  CHANGE_URL,
  CLEAR_ALL
} from './store/reducer';

const bio = 'bio';
const BIO = 'CEO of Microsoft';
const clear = 'clear';
const name = 'name';
const NAME = 'Satya Nadella';
const url = 'url';
const URL = 'https://www.microsoft.com/en-us/';

describe('makeHandleOnChange', () => {
  const scenarios = [
    {
      action: { type: CHANGE_BIO, value: BIO },
      description: `event name: ${bio}`,
      target: { name: bio, value: BIO }
    },
    {
      action: { type: CLEAR_ALL },
      description: `event name: ${clear}`,
      target: { name: clear }
    },
    {
      action: { type: CHANGE_NAME, value: NAME },
      description: `event name: ${name}`,
      target: { name, value: NAME }
    },
    {
      action: { type: CHANGE_URL, value: URL },
      description: `event name: ${url}`,
      target: { name: url, value: URL }
    }
  ];

  const mockDispatch = jest.fn();
  beforeEach(() => {
    mockDispatch.mockReset();
  });

  scenarios.forEach(({ action, description, target }) => {
    it(description, () => {
      const handleOnChange = makeHandleOnChange({ dispatch: mockDispatch });
      handleOnChange({ target });
      expect(mockDispatch).toBeCalledWith(action);
    });
  });

  it("event name: 'unknown'", () => {
    const handleOnChange = makeHandleOnChange({ dispatch: mockDispatch });
    handleOnChange({ target: { name: 'unknown' } });
    expect(mockDispatch).not.toBeCalled();
  });
});
