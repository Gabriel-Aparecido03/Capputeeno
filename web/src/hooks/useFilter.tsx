import { FilterContext } from "@/context/filterContext";
import { useContext } from "react";

export function useFilter() {
  const res = useContext(FilterContext)
  return res
}