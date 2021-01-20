import React from 'react';
import { render, screen, act, waitFor, fireEvent, userEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { fetchFilms, getFilmsApiEndPoint } from './App';
import App from './App';
import { mockFilms } from './__mocks__/FilmsResponse.js';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { Router } from 'react-router-dom';

test('app renders', () => {
  render(<App />);
});

const server = setupServer(
  rest.get(getFilmsApiEndPoint, (req, res, ctx) => {
    return res(ctx.json(mockFilms))
  })
)

test('app renders films', async () => {
  // arrange
  render(<App />);
  // act - mock server called
  await waitFor(() => screen.getByText('A New Hope'))
  // assert
  expect(screen.getByText('A New Hope')).toBeInTheDocument();
})

test('app initially shows loading state and then shows films', async () => {
  // arrange
  render(<App />);
  // act - mock server called
  await waitFor(() => screen.getByText('Loading'))
  // assert
  expect(screen.getByText('Loading')).toBeInTheDocument();
  // act - mock server called
  await waitFor(() => screen.getByText('A New Hope'))
  // assert
  expect(screen.getByText('A New Hope')).toBeInTheDocument();
})

// test('clicking on a film changes the heading to the film name', async () => {
//   // arrange
//   render(<App />);
//   // act - mock server called
//   await waitFor(() => screen.getByText('A New Hope'))
//   fireEvent.click(screen.getByText('A New Hope'))
//   // assert
//   expect(screen.getByText('A New Hope')).toBeInTheDocument();
// })

// test('full app rendering/navigating', async () => {
//   const history = createMemoryHistory();
//   render (
//     <Router history={history}>
//       <App />
//     </Router>
//   );

//   await waitFor(() => screen.getByText('A New Hope'))
//   fireEvent.click(screen.getByText('A New Hope'))
//   expect(screen.getByTestId("film-director")).toBeInTheDocument()
// })








