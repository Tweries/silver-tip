import React from 'react';
import useReducerWithLocalStorage from './hooks/useReducerWithLocalStorage';
import reducer, {
  CHANGE_BIO,
  CHANGE_NAME,
  CHANGE_URL,
  emptyState
} from './store/reducer';
import './App.css';

function App() {
  const [{ bio, name, url }, dispatch] = useReducerWithLocalStorage({
    initializerArg: emptyState,
    key: 'REACT_APP_STATE',
    reducer
  });

  return (
    <div className="App">
      <h1 className="App__h1">Public profile</h1>
      <form className="App__form">
        <input
          className="App__input"
          name="name"
          onChange={(e) =>
            dispatch({ type: CHANGE_NAME, value: e.target.value })
          }
          placeholder="Name"
          type="text"
          value={name}
        />
        <textarea
          className="App__textarea"
          cols="40"
          name="bio"
          onChange={(e) =>
            dispatch({ type: CHANGE_BIO, value: e.target.value })
          }
          placeholder="Bio"
          rows="10"
          value={bio}
        />
        <input
          className="App__input"
          name="url"
          onChange={(e) =>
            dispatch({ type: CHANGE_URL, value: e.target.value })
          }
          placeholder="URL"
          type="text"
          value={url}
        />
      </form>
    </div>
  );
}

export default App;
