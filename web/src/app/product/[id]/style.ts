import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  padding-bottom: 2rem;
`

export const ProductContent = styled.main`
  padding-inline: 10rem;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: stretch;
  gap: 2rem;
  margin-top: 1rem;
`

export const ProductInfos = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`

export const Category = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: ${props => props.theme.textDark2};
  margin-bottom: 0.75rem;
`

export const Title = styled.h6`
  font-size: 2rem;
  font-weight: 300;
  color: ${props => props.theme.textDark2};
  margin-bottom: 0.25rem;
`

export const Price = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${props => props.theme.shapesDark};
  margin-bottom: 1.5rem;
`

export const Delivery = styled.span`
  font-size: 0.75rem;
  color: ${props => props.theme.textDark2};
`

export const ContainerDescription = styled.div`
  p {
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 500;
    color: ${props => props.theme.textDark};
  }

  span {
    color: ${props => props.theme.textDark2};
    font-size: 0.875rem;
    font-weight: 400;
  }
`

export const ButtonAddCart = styled.button`
  border-radius: 6px;
  border: none;
  text-transform: uppercase;
  width: 100%;
  color: #F5F5FA;
  padding: 0.65rem;
  gap: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #115D8C;
  font-weight: 500;

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`