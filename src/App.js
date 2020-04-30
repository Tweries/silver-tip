import React, { useEffect } from 'react';
import useReducerWithLocalStorage from 'use-reducer-with-local-storage';
import reducer, {
  emptyState,
  LOADING,
  READY,
  SET_STATUS
} from './store/reducer';
import './App.css';
import makeHandleOnChange from './makeHandleOnChange';

function App() {
  const [{ bio, name, status, url }, dispatch] = useReducerWithLocalStorage({
    blacklist: ['status'],
    initializerArg: emptyState,
    key: 'REACT_APP_STATE',
    reducer
  });

  const handleOnChange = makeHandleOnChange({ dispatch });

  useEffect(() => {
    if (status === LOADING) {
      setTimeout(() => {
        dispatch({ type: SET_STATUS, value: READY });
      }, 3000);
    }
  }, [dispatch, status]);

  return (
    <div className="App">
      {status === LOADING ? (
        <h1 className="App__h1">Loading ...</h1>
      ) : (
        <>
          <h1 className="App__h1">Public profile</h1>
          <form className="App__form">
            <input
              className="App__input"
              name="name"
              onChange={handleOnChange}
              placeholder="Name"
              type="text"
              value={name}
            />
            <textarea
              className="App__textarea"
              cols="40"
              name="bio"
              onChange={handleOnChange}
              placeholder="Bio"
              rows="10"
              value={bio}
            />
            <input
              className="App__input"
              name="url"
              onChange={handleOnChange}
              placeholder="URL"
              type="text"
              value={url}
            />
            <button
              className="App__button"
              name="clear"
              onClick={handleOnChange}
              type="button"
            >
              Clear
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default App;
