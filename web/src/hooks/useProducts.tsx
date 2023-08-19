import client from "@/graphql/client";
import { QUERIE_GET_ALL_PRODUCTS } from "@/graphql/queries/getAllProducts";
import { formatter } from "@/utils/formatterVars";
import { useEffect, useState } from "react";

export type CategoryOptionProps = 'all' | 't-shirts' | 'mugs';
export type OrderOptionProps = 'news' | 'ascending' | 'descending' | 'topseller' | 'none';

interface ProductType {
  id : string
  name : string
  imageUrl: string
  priceInCents: string
  category : string
}

export function useProducts(category : CategoryOptionProps,order:OrderOptionProps,page:number) {

  const [products,setProducts] = useState<ProductType[]>([])

  async function gettingListOfPrdocuts() {
    
    const format = formatter(order)
    const categoryFormat = category === 'all' ? {} : { "category": `${category}` }

    const vars = {
      page: page,
      perPage: 12,
      sortFilter: categoryFormat,
      sortField: format[0],
      sortOrder: format[1],
    }

    const res = await client.request(QUERIE_GET_ALL_PRODUCTS,vars) as any;
    setProducts(res.allProducts)
  }

  useEffect(()=>{
    gettingListOfPrdocuts()
  },[category,order,page])


  return { listOfProducts : products}
} 