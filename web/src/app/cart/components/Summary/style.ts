import styled from "styled-components";

export const SummaryContainer = styled.div`
  background-color: #FFF;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 480px;
  width: 360px;
`

export const SummaryTitle = styled.p`
  color: ${props => props.theme.textDark2} ;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
`


export const SummaryItensSub = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  
  span,p {
    font-size: 1rem;
    font-weight: 400;
    color: ${props => props.theme.textDark2};
  }
`

export const SummaryItens = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  
  span,p {
    font-size: 1rem;
    font-weight: 600;
    color: ${props => props.theme.textDark2};
  }
`

export const Divider = styled.div`
  background-color: ${props => props.theme.shapes};
  height: 0.0625rem;
  width: 100%;
  margin-block: 0.75rem;
`

export const ButtonBuy = styled.button`
  text-transform: uppercase;
  font-weight: 600;
  color: #FFF;
  padding: 1rem;
  width: 100%;
  border: none;
  border-radius: 4px;
  background-color: #51B853;
  margin-top: 2.5rem;

  &:hover {
    opacity: 0.9;
    cursor:pointer;
  }
`