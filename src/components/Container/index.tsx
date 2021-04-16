import * as S from './style'

export type ContainerProps = {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  return <S.Wrapper>{children}</S.Wrapper>
}
