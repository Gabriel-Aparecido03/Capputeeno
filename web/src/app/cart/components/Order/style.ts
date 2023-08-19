import styled from "styled-components";

export const OrderContainer = styled.div`
  max-width: 736px;
  display: flex;
  flex-direction: column;
`

export const Quantity = styled.span`
  color: ${props => props.theme.textDark2};
  font-size: 1rem;
  font-weight: 300;
`

export const Title = styled.h6`
  color: ${props => props.theme.textDark2};
  font-size: 1.5rem;
  font-weight: 500;
  text-transform: uppercase;
`

export const ItemsDisplay = styled.div`
  display:flex;
  width: 576px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 1rem;
`