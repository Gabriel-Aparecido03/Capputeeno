'use client'

import { Back } from "@/components/Back";
import { CardItem } from "./components/CardItem";
import { Summary } from "./components/Summary";
import { Order } from "./components/Order";
import { CartContainerItens } from "./style";

export default function Cart() {
  return (
    <div>
      <Back/>
      <CartContainerItens>
        <Order />
        <Summary />
      </CartContainerItens>
    </div>
  )
}