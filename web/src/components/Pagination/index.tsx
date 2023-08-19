import { CaretLeft, CaretRight } from "phosphor-react";
import { ButtonPagination, PagiantionContainer } from "./style";
import { useFilter } from "@/hooks/useFilter";

export function Pagination() {

  const { page,filterPage }  = useFilter()
  
  return (
    <PagiantionContainer>
      <ButtonPagination 
        isSelected={page === 1}
        onClick={()=>{filterPage(1)}}
      >
        1
      </ButtonPagination>
      <ButtonPagination 
        isSelected={page === 2}
        onClick={()=>{filterPage(2)}}
      >
        2
      </ButtonPagination>
      <ButtonPagination 
        isSelected={page === 3}
        onClick={()=>{filterPage(3)}}
      >
        3
      </ButtonPagination>
      <ButtonPagination 
        isSelected={page === 4}
        onClick={()=>{filterPage(4)}}
      >
        4
      </ButtonPagination>
      <div>
        <ButtonPagination 
          isSelected={false}
          disabled={page === 1}
          onClick={()=>{filterPage(page - 1)}}
        >
          <CaretLeft size={24}/>
        </ButtonPagination>
        <ButtonPagination 
          isSelected={false}
          disabled={page === 5}
          onClick={()=>{filterPage(page + 1)}}
        >
          <CaretRight  size={24}/>
        </ButtonPagination>
      </div>
    </PagiantionContainer>
  )
}