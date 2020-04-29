import React from 'react';
import useReducerWithLocalStorage from './hooks/useReducerWithLocalStorage';
import reducer, { emptyState } from './store/reducer';
import './App.css';
import makeHandleOnChange from './makeHandleOnChange';

function App() {
  const [{ bio, name, url }, dispatch] = useReducerWithLocalStorage({
    initializerArg: emptyState,
    key: 'REACT_APP_STATE',
    reducer
  });

  const handleOnChange = makeHandleOnChange({ dispatch });

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
