import { CartContext } from "@/context/cartContext";
import { useContext } from "react";

export function useCart() {
  const res = useContext(CartContext)
  return res
}