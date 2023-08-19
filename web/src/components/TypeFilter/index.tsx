import { useState } from "react";
import { TypeFilterButton, TypeFilterContainer } from "./style";
import { CategoryOptionProps } from "@/hooks/useProducts";
import { useFilter } from "@/hooks/useFilter";

export function TypeFilter() {

  const { category,filterCategory }  = useFilter()

  return (
    <TypeFilterContainer>
      <TypeFilterButton 
        isSelected={ category === "all"}
        onClick={()=>{filterCategory("all")}}
      >
        Todos os produtos
      </TypeFilterButton>
      <TypeFilterButton
        isSelected={ category === "t-shirts"}
        onClick={()=>{filterCategory("t-shirts")}}
      >
        Camisetas
      </TypeFilterButton>
      <TypeFilterButton 
        isSelected={ category === "mugs"}
        onClick={()=>{filterCategory("mugs")}}
      >
        Canecas
      </TypeFilterButton>
    </TypeFilterContainer>
  )
}