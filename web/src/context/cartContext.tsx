import { ReactNode, createContext, useState } from "react";

interface ProductCartProps {
  id:string;
  title : string;
  description : string;
  unityPrice : number,
  amountPrice : number;
  quantity: number;
  imageUrl:string;
}

interface CartContextProps {
  addedProduct : (product : ProductCartProps) => void;
  removedProduct : (id : string ) => void;
  updatedQuantity : (id:string,quantity:number) => void;
  resetCart : () => void;
  productList : ProductCartProps[]
}

interface CartContextProviderProps {
  children : ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({ children }:CartContextProviderProps) {
  const [productList,setProductList] = useState<ProductCartProps[]>([])

  function addedProduct(product:ProductCartProps) {
    if(productList.findIndex(item => item.id === product.id) !== -1) return
    setProductList(prev => [...prev,product])
  }

  function removedProduct(id:string) {
    const filteredArray = productList.filter( item => item.id !== id)
    setProductList([...filteredArray])
  }

  function updatedQuantity(id:string,quantity:number) {
    const newArrayProduct = productList
    const indexProduct = newArrayProduct.findIndex(item => item.id === id)
    const updatedProduct = newArrayProduct[indexProduct]

    updatedProduct.quantity = quantity
    updatedProduct.amountPrice = quantity * updatedProduct.unityPrice

    setProductList([...newArrayProduct])
  }

  function resetCart() {
    setProductList([])
  }

  return (
    <CartContext.Provider
      value={{
        addedProduct,
        productList,
        removedProduct,
        resetCart,
        updatedQuantity
      }}
    >
      { children }
    </CartContext.Provider>
  )
}