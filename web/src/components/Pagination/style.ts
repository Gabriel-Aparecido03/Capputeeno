import styled from "styled-components"

export const PagiantionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.15rem;

  & > div {
    display: flex;
    justify-content: flex-end;
    gap: 0.25rem;
    margin-left: 0.5rem;
  }
`

interface ButtonPaginationInterface {
  isSelected : boolean
}

export const ButtonPagination = styled.button<ButtonPaginationInterface>`
  border: none;
  border: 1px solid ${props => props.isSelected ? props.theme.orangeLow : "transparent"};
  color:${props => props.isSelected ? props.theme.orangeLow : props.theme.textDark};
  background-color: ${props => props.isSelected ? "#F5F5FA" : "#E9E9F0"};
  padding: 0.25rem;
  font-size: 1rem;
  width: 2rem;
  height: 2rem;
  border-radius: 8px;
  cursor: pointer;
`