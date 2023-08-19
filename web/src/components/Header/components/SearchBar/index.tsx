'use client'

import { useFilter } from "@/hooks/useFilter"
import { Input } from "./style"

export function SearchBar() {

  const { search,filterSearch } = useFilter()

  return (
    <Input 
      value={search} 
      onChange={e => { filterSearch(e.target.value)}} 
      placeholder="procurando por algo específico ?"
    />
  )
}