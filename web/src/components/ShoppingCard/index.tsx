import Image from "next/image";
import { ShoppingCardContainer, InfosContainer, Divider, StyledLink } from "./style";
import { formtCoin } from "@/utils/formatterCoin";
import Link from "next/link";

interface ShoppingCardType {
  id : string
  name : string
  imageUrl: string
  priceInCents: string
}

export function ShoppingCard({id,imageUrl,name,priceInCents}:ShoppingCardType) {
  return (
    <StyledLink href={`/product/${id}`} >
    <ShoppingCardContainer>
      <Image 
        src={imageUrl} 
        width={256}
        height={300}
        alt=""
      />
      <InfosContainer>
        <p>{name}</p>
        <Divider />
        <span>{formtCoin.format(parseInt(priceInCents ) / 100)}</span>
      </InfosContainer>
    </ShoppingCardContainer>
    </StyledLink>
  )
}