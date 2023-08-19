import styled from "styled-components";

export const HelpersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.75rem;
  align-items: flex-start;

  a {
    text-decoration: underline;
    color: ${props => props.theme.textDark };
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 500;
  }
`