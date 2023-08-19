import { CategoryOptionProps, OrderOptionProps, useProducts } from "@/hooks/useProducts";
import { Children, ReactNode, createContext, useState } from "react";

/* 
category 
Order
page
Search
 */

interface ProductType {
  id : string
  name : string
  imageUrl: string
  priceInCents: string
  category : string
}

interface FilterContextType {
  filteredProducts : ProductType[]
  filterCategory : (categoryProps : CategoryOptionProps) => void
  filterOrder : (orderProps : OrderOptionProps) => void
  filterPage : (pageProps : number) => void
  filterSearch : (searchProps : string) => void
  category : CategoryOptionProps
  search : string
  page : number
  order : OrderOptionProps
}

interface FilterContextProvider {
  children : ReactNode
}

export const FilterContext = createContext({} as FilterContextType)

export function FilterContextProvider({ children }:FilterContextProvider) {

  const [ category,setCategory ] = useState<CategoryOptionProps>('all');
  const [ order,setOrder ] = useState<OrderOptionProps>('none');
  const [ page,setPage ] = useState(1);
  const [ search,setSearch ]  = useState('')

  const { listOfProducts } = useProducts(category,order,page)

  function filterCategory(categoryProps : CategoryOptionProps) {
    setCategory(categoryProps)
  }
  
  function filterOrder(orderProps : OrderOptionProps) {
    setOrder(orderProps)
  }

  function filterPage(pageProps : number) {
    setPage(pageProps)
  }

  function filterSearch(searchProps : string) {
    setSearch(searchProps)
  }
  

  const filteredProducts = search.length > 0 ? listOfProducts.filter( item => item.name.includes(search)) : listOfProducts

  return (
    <FilterContext.Provider 
    value={{ 
      filterCategory,
      filteredProducts,
      filterOrder,
      filterPage,
      filterSearch,
      category,
      order,
      page,
      search
    }}>
      {children}
    </FilterContext.Provider>
  )
}

