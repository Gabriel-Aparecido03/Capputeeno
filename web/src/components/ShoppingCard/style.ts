import Link from "next/link";
import styled from "styled-components";

export const ShoppingCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-decoration: none !important;

  img {
    border-radius: 4px 4px 0 0;
  }
`

export const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export const Divider = styled.div`
  background-color: ${props => props.theme.shapes};
  height: 0.0625rem;
  margin-inline: auto;
  width: 96%;
`

export const InfosContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.40);
  padding: 0.5rem 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 0 0 4px 4px;

  p {
    color: ${props => props.theme.textDark2};
    font-size: 1rem;
  }

  span {
    color: ${props => props.theme.shapesDark};
    font-size: 0.875rem;
    font-weight: 600;
  }
`