import styled from 'styled-components'

export const ButtonContainer = styled.button`
  border: none;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 10px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['green-500']};
`
