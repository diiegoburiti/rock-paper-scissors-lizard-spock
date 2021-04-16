import { screen } from '@testing-library/react'

import { FaHandRock } from 'react-icons/fa'

import { renderWithTheme } from 'utils/tests/helpers'

import Button from '.'

const props = {
  children: 'rock'
}

describe('<Container />', () => {
  it('should render Button', () => {
    renderWithTheme(<Button onClick={jest.fn()}>{props.children}</Button>)

    expect(
      screen.getByRole('button', { name: props.children })
    ).toBeInTheDocument()
  })

  it('should render Button with icon', () => {
    renderWithTheme(
      <Button onClick={jest.fn()} icon={<FaHandRock data-testid="icon" />}>
        {props.children}
      </Button>
    )

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render disabled button when prop is passed', () => {
    renderWithTheme(
      <Button
        disabled
        onClick={jest.fn()}
        icon={<FaHandRock data-testid="icon" />}
      >
        {props.children}
      </Button>
    )

    expect(
      screen.getByRole('button', { name: props.children })
    ).toHaveStyleRule('cursor', 'not-allowed', {
      modifier: ':disabled'
    })
  })
})
