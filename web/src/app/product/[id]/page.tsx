'use client'

import { Back } from "@/components/Back";
import Image from "next/image";
import { ShoppingBag } from "phosphor-react";
import { ProductContent, ProductInfos, Category, Title, Price, ContainerDescription, ButtonAddCart, ProductContainer, Delivery } from "./style";
import { useProduct } from "@/hooks/useProduct";
import { formtCoin } from "@/utils/formatterCoin";
import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";

export default function Product(params : { params : { id : string }}) { 

  const { addedProduct } = useCart()
  const product = useProduct(params.params.id)
  const router = useRouter()

  
  if(!product) return

  const newProductObj = {
    id:product.id,
    title : product.name,
    description : product.description,
    unityPrice : product.priceInCents,
    amountPrice : product.priceInCents,
    quantity: 1,
    imageUrl : product.imageUrl
  }

  function handleAddItemToCart() {
    addedProduct(newProductObj)
    router.push('/')
  }

  return (
    <ProductContainer> 
      <Back />
      <ProductContent>
        <Image src={product?.imageUrl} alt="" width={640} height={580} />
        <ProductInfos>
            <div>
              <Category>{product?.category}</Category>
              <Title>{product?.name}</Title>
              <Price>{formtCoin.format(product?.priceInCents)}</Price>
              <Delivery>*Frete de R$ 40,00 para todo o Brasil. Grátis para compras acima de R$ 900,00. </Delivery>
            </div>
            <ContainerDescription>
              <p>Descrição</p>
              <span>{product?.description}</span>
            </ContainerDescription>
          <ButtonAddCart onClick={handleAddItemToCart}><ShoppingBag /> Adicionar ao carinho</ButtonAddCart>
        </ProductInfos>
      </ProductContent>
    </ProductContainer>
  )
}