"use client"

import { Pagination } from "@/components/Pagination";
import { Select } from "@/components/Select";
import { ShoppingCard } from "@/components/ShoppingCard";
import { TypeFilter } from "@/components/TypeFilter";
import { useFilter } from "@/hooks/useFilter";
import { CategoryOptionProps, OrderOptionProps, useProducts } from "@/hooks/useProducts";
import { ContainerHome, FilterContainer, ListCart } from "@/styles/page";
import { useEffect, useState } from "react";
import page from "./cart/page";

interface ProductType {
  id : string
  name : string
  imageUrl: string
  priceInCents: string
  category : string
}

export default function Home() {

  const { filteredProducts  } = useFilter() 

  return (
    <ContainerHome>
      <FilterContainer>
        <TypeFilter />
        <Select />
      </FilterContainer>
      <Pagination  />
      <ListCart>
        { filteredProducts.map( item => (
          <ShoppingCard
            id={item.id}
            imageUrl={item.imageUrl}
            name={item.name}
            priceInCents={item.priceInCents}
            key={item.id}
          />
        ))}
      </ListCart>
      <Pagination />
    </ContainerHome>
  )
}
