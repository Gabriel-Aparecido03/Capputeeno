import { Trash } from "phosphor-react";
import { CardContainer, CardInfosContainer, ContainerAction, Description, Price, SelectContainer, Title } from "./style";
import { useCart } from "@/hooks/useCart";
import Image from "next/image";
import { formtCoin } from "@/utils/formatterCoin";

interface ProductCartProps {
  product : {
    id:string;
    title : string;
    description : string;
    unityPrice : number,
    amountPrice : number;
    quantity: number;
    imageUrl:string;
  }
}


export function CardItem({ product }:ProductCartProps) {

  const { updatedQuantity,removedProduct } = useCart()
  const id = product.id

  return (
    <CardContainer>
      <Image src={product.imageUrl} alt="" width={256} height={208}/>
      <CardInfosContainer>
        <ContainerAction>
          <Title>{product.title}</Title>
          <Trash 
            onClick={()=>{
              removedProduct(id)
            }}
            size={24} 
            color="#DE3838"
          />
        </ContainerAction>
        <div>
          <Description>
            { product.description }
          </Description>
        </div>
        <ContainerAction>
          <SelectContainer
            onChange={e => {
              const quantity = parseInt(e.target.value)
              updatedQuantity(id,quantity)
            }}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </SelectContainer>
          <Price>{ formtCoin.format(product.unityPrice) }</Price>
        </ContainerAction>
      </CardInfosContainer>
    </CardContainer>
  )
}