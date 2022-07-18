import React from 'react'
import { ButtonContainer } from './index.styles'

interface Props {
  children: React.ReactNode
}

const Button: React.FC<Props> = ({ children }) => {
  return <ButtonContainer>{children}</ButtonContainer>
}

export default Button
