import client from "@/graphql/client";
import { GET_PRODUCTS_BY_ID } from "@/graphql/queries/getProductById";
import { useEffect, useState } from "react";

interface ProductType {
  id : string
  name: string
  description: string
  category: string
  imageUrl: string
  priceInCents: number
  sales : number
  createdAt: string
}

export function useProduct(id:string) {

  const [product,setProduct]  = useState<ProductType>()

  async function gettingInfosOfProduct() {
    const res = await client.request(GET_PRODUCTS_BY_ID,{ id : id})
    const productResponse : ProductType = res.Product
    productResponse.priceInCents = productResponse.priceInCents / 100
    setProduct(productResponse)
  }

  useEffect(()=>{
    gettingInfosOfProduct()
  },[])

  return product
}