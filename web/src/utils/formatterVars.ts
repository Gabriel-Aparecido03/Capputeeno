import { OrderOptionProps } from "@/hooks/useProducts";

export function formatter(formt:OrderOptionProps) {
  const formatter = {
    'news' : [ 'created_at', 'DESC' ],
    'topseller' : [ 'sales', 'DESC' ],
    'descending' : [ 'price_in_cents', 'DESC' ],
    'ascending' : [ 'price_in_cents', 'ASC' ],
    'none' : ''
  } as const

  return formatter[formt]
}