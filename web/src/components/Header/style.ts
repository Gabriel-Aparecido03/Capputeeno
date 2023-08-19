import Link from "next/link";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding-inline: 10rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }

  background-color: #FFF;

  img {
    cursor: pointer;
  }
`

export const Button = styled(Link)`
  background: transparent;
  position: relative;
  border: none;

  &:hover {
    cursor:pointer;
  }
`

export const Badge = styled.div `
  position: absolute;
  width: 1.0625rem;
  height: 1.0625rem;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  font-size: 0.625rem;
  color: #FFF;
  font-weight: 500;

  border-radius: 1.0625rem;

  bottom: -0.25rem;
  right: -0.5rem;

  background-color: ${props => props.theme.deleteColor};
`