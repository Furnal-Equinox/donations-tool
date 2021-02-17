import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders banner', () => {
  render(<App />)
  const banner = screen.getByText(/Furnal Equinox Donations Tool/i)
  expect(banner).toBeInTheDocument()
})
