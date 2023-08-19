import { OrderOptionProps } from "@/hooks/useProducts";
import { SelectContainer } from "./style";
import { useFilter } from "@/hooks/useFilter";

export function Select() {

  const { filterOrder }  = useFilter()

  return (
    <SelectContainer
      onChange={e => {
        const tsTrated = e.target.value as OrderOptionProps
        filterOrder(tsTrated)
      }}
    >
      <option value="news">Novidades</option>
      <option value="descending">Preço: Maior - menor</option>
      <option value="ascending">Preço: Menor - maior</option>
      <option value="topseller">Mais vendidos</option>
    </SelectContainer>
  )
}