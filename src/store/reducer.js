export const CHANGE_BIO = 'CHANGE_BIO';
export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_URL = 'CHANGE_URL';
export const CLEAR_ALL = 'CLEAR_ALL';
export const LOADING = 'LOADING';
export const READY = 'READY';
export const SET_STATUS = 'SET_STATUS';

export const emptyState = { bio: '', name: '', status: LOADING, url: '' };

function reducer(state, action) {
  switch (action.type) {
    case CHANGE_BIO:
      return { ...state, bio: action.value };
    case CHANGE_NAME:
      return { ...state, name: action.value };
    case CHANGE_URL:
      return { ...state, url: action.value };
    case CLEAR_ALL:
      return { ...emptyState };
    case SET_STATUS:
      return { ...state, status: action.value };
    default:
      return state;
  }
}

export default reducer;
