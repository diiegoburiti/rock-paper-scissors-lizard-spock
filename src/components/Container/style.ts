import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    max-width: ${theme.grid.container};
    margin: 0 auto;
    height: 100vh;
    padding: 0 0.8rem;

    ${media.greaterThan('large')`
      flex-direction: column;
      padding: 0;
    `}
  `}
`
