import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { fetchFilms } from './App';
import Films from './components/Films';

test('the data is peanut butter', async () => {
  const data = await fetchFilms();
  expect(data).toBe('chuchu');
});
