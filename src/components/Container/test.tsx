import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Container from '.'

const props = {
  children: 'container children'
}

describe('<Container />', () => {
  it('should render Container children', () => {
    renderWithTheme(
      <Container>
        <h3>{props.children}</h3>
      </Container>
    )

    expect(
      screen.getByRole('heading', { name: props.children })
    ).toBeInTheDocument()
  })
})
