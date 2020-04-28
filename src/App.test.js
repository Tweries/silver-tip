import { render } from '@testing-library/react';
import React from 'react';
import useReducerWithLocalStorage from './hooks/useReducerWithLocalStorage';
import App from './App';

jest.mock('./hooks/useReducerWithLocalStorage');

describe('<App />', () => {
  useReducerWithLocalStorage.mockImplementation(() => [
    {
      bio: 'CEO of Microsoft',
      name: 'Satya Nadella',
      url: 'https://www.microsoft.com/en-us/'
    },
    jest.fn()
  ]);

  it('to match snapshot', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
