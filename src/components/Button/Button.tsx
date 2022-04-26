import { Btn } from './styles'

interface ButtonProps {
  title: string
  type?: 'submit' | 'reset' | 'button'
  onClick?: () => void
  disabled?: boolean
}

function Button ({ title, onClick, type, disabled }: ButtonProps) {
  return (
    <Btn type={type} onClick={onClick} disabled={disabled}>
      {title}
    </Btn>
  )
}

export default Button
