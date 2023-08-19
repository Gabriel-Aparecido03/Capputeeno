import { ArrowUUpLeft } from "phosphor-react";
import { ContainerBack, StyledLink } from "./style";

export function Back() {
  return (
    <ContainerBack>
      <StyledLink href="/"><ArrowUUpLeft size={24}/> <span>Voltar</span></StyledLink>
    </ContainerBack>
  )
}