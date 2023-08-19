import Link from "next/link";
import styled from "styled-components";

export const ContainerBack = styled.div`
  padding-inline: 10rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 0.875rem;
  font-style: normal;
  margin-top: 1.5rem;
  font-weight: 500;
  color: ${props => props.theme.secondaryText};
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;