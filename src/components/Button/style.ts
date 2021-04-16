import styled, { css } from 'styled-components'

import { ButtonProps } from '.'

type ButtonWrapperProps = {
  active?: boolean
} & Pick<ButtonProps, 'disabled'>

const wrapperModifier = {
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(80%);
    }
  `
}

export const Wrapper = styled.button<ButtonWrapperProps>`
  ${({ theme, disabled }) => css`
    background-color: ${theme.colors.yellow};
    border: 1px solid transparent;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    border-radius: ${theme.border.radius};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    transition: transform 0.2s;
    width: 15rem;
    text-align: center;

    &:focus {
      outline: none;
      border: 1px solid ${theme.colors.gray};
    }

    &:hover {
      transform: scale(1.1);
    }

    svg {
      width: 2rem;
      margin-right: 0.5rem;
    }

    ${!!disabled && wrapperModifier.disabled()};
  `}
`
