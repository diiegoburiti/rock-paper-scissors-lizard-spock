import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    width: 100vw;
    height: 100vh;

    div {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      align-self: end;

      ${media.greaterThan('large')`
        width: 65%;
        align-self: auto;
      `}

      button {
        margin: 0.2rem;
      }
    }
  `}
`

export const Header = styled.header`
  ${({ theme }) => css`
    align-self: flex-start;

    ${media.greaterThan('large')`
      align-self: auto;
    `}

    h1 {
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.large};
      border: 1px solid ${theme.colors.lightGray};
      border-radius: ${theme.border.radius};
      padding: ${theme.spacings.normal};
    }
  `}
`

export const Result = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.normal};
    ${media.greaterThan('large')`
    `}

    h2 {
      text-align: center;
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.medium};
      padding: ${theme.spacings.normal};
      width: 100%;
      transition: 400ms;
      animation: TextAnimation 0.5s forwards;
    }

    @keyframes TextAnimation {
      from {
        opacity: 0;
        transform: translate3d(0, -10px, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
  `}
`

export const Image = styled.img`
  max-width: 100%;

  ${media.lessThan('medium')`
      width: 23rem;
  `}
`
