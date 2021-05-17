import React from 'react';
import { render, getByTestId, fireEvent } from '@testing-library/react';
import Result from '../Result';

// import the library we are faking
import axios from 'axios';

// tell jest to mock/fake axios
jest.mock('axios');

// setup mock data
const data = [
  {
    id: 1,
    name: 'Alice',
    points: 15
  },
  {
    id: 2,
    name: 'Bob',
    points: 10
  },
  {
    id: 3,
    name: 'Carol',
    points: 5
  }
];

test('can display results from an AJAX request', () => {
  const {getByTestId, findByText} = render(<Result status="Waiting" />);

  // setup fake axios with fake return data
  axios.get.mockResolvedValue({ data });

  const button = getByTestId('high-scores');

  fireEvent.click(button);

  return findByText('Carol', { exact: false });
});

test('shows appropriate message when the status is "Waiting"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
  
  const { container } = render(<Result status={fakeState.status} />);

  expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for your choice!');
});
