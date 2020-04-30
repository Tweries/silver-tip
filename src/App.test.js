import { render } from '@testing-library/react';
import React from 'react';
import useReducerWithLocalStorage from 'use-reducer-with-local-storage';
import App from './App';

jest.mock('use-reducer-with-local-storage');

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
