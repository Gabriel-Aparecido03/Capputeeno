import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  background-color: #FFF;
  border-radius: 0 6px 6px 0;
  img {
    border-radius: 6px 0 0 6px;
  }
`

export const CardInfosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 2rem 1.5rem;
`
export const Title = styled.div`
  font-size: 1.25rem;
  font-weight: 300;
  color: ${props => props.theme.textDark2};
`

export const Description = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
  color: ${props => props.theme.textDark2};
`

export const ContainerAction = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    cursor: pointer;
  }
`

export const Price = styled.span `
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  color: ${props => props.theme.shapesDark};
`

export const SelectContainer = styled.select`
 background: transparent;
 color: ${props => props.theme.textDark};
 border: none;
 font-size: 0.875rem;

 cursor: pointer;
`