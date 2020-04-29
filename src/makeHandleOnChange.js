import {
  CHANGE_BIO,
  CHANGE_NAME,
  CHANGE_URL,
  CLEAR_ALL
} from './store/reducer';

function makeHandleOnChange({ dispatch }) {
  function handleOnChange(e) {
    const { name: name_, value } = e.target;
    switch (name_) {
      case 'bio':
        dispatch({ type: CHANGE_BIO, value });
        break;
      case 'clear':
        dispatch({ type: CLEAR_ALL });
        break;
      case 'name':
        dispatch({ type: CHANGE_NAME, value });
        break;
      case 'url':
        dispatch({ type: CHANGE_URL, value });
        break;
      default:
        break;
    }
  }

  return handleOnChange;
}

export default makeHandleOnChange;
