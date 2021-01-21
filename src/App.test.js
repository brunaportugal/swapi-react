import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { getFilmsApiEndPoint } from './App';
import App from './App';
import { mockFilms } from './__mocks__/FilmsResponse.js';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

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








