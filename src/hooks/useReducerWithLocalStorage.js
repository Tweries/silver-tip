import { useReducer } from 'react';
import useLocalStorage from './useLocalStorage';

function useReducerWithLocalStorage({ initializerArg, key, reducer }) {
  const [localStorageState, setLocalStorageState] = useLocalStorage(
    key,
    JSON.stringify(initializerArg)
  );

  return useReducer(
    (state, action) => {
      const newState = reducer(state, action);
      setLocalStorageState(JSON.stringify(newState));
      return newState;
    },
    {
      ...JSON.parse(localStorageState)
    }
  );
}

export default useReducerWithLocalStorage;
