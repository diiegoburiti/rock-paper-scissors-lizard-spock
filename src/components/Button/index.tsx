import * as S from './style'

export type ButtonProps = {
  children: React.ReactNode
  disabled?: boolean
  icon?: React.ReactNode
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button({
  children,
  icon,
  onClick,
  disabled = false
}: ButtonProps) {
  return (
    <S.Wrapper onClick={onClick} disabled={disabled}>
      {!!icon && icon}

      {children}
    </S.Wrapper>
  )
}
