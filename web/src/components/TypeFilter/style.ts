import styled from "styled-components"

interface TypeFilterType {
  isSelected : boolean
}

export const TypeFilterContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 2.5rem;
  align-items: center;
  margin-top: 2.5rem;
`

export const TypeFilterButton = styled.button<TypeFilterType>`
  background: transparent;
  padding: 0.25rem 0;
  font-size: 1rem;
  border: none;
  border-bottom: 4px solid ${props => props.isSelected ? props.theme.orangeLow : 'transparent'};
  color: ${ props => props.isSelected ? props.theme.textDark2 : props.theme.textDark };
  font-weight: ${ props => props.isSelected ? 600 : 400 };
  cursor: pointer;
`