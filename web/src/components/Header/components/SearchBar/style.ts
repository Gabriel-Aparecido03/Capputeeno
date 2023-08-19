import styled from "styled-components";

export const Input = styled.input`
  padding: 0.5rem;
  border-radius: 8px;
  background-color: ${props => props.theme.bgSecondary};
  color: ${props => props.theme.textDark};
  font-size: 0.875rem;
  width: 22rem;
  border: 1px solid ${props => props.theme.bgSecondary};

  cursor: pointer;
`