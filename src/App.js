import React, { useReducer } from 'react';
import './App.css';

const CHANGE_BIO = 'CHANGE_BIO';
const CHANGE_NAME = 'CHANGE_NAME';
const CHANGE_URL = 'CHANGE_URL';

function App() {
  function reducer(state, action) {
    console.log(action);
    switch (action.type) {
      case CHANGE_BIO:
        return { ...state, bio: action.value };
      case CHANGE_NAME:
        return { ...state, name: action.value };
      case CHANGE_URL:
        return { ...state, url: action.value };
      default:
        return state;
    }
  }

  const initializerArgs = { bio: '', name: '', url: '' };

  const [{ bio }, dispatch] = useReducer(reducer, initializerArgs);

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
        />
      </form>
    </div>
  );
}

export default App;
