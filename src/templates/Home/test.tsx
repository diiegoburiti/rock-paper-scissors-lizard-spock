import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Home from '.'

describe('<Home />', () => {
  it('should render Home template correctly', () => {
    renderWithTheme(<Home />)

    expect(
      screen.getByRole('heading', {
        name: /Do you chose Rock, Lizard, Spock, Scissors or Paper ?/i
      })
    ).toBeInTheDocument()

    expect(screen.getAllByRole('button')).toHaveLength(5)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
