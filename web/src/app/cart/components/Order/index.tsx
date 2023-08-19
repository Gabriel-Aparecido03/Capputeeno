import { useCart } from "@/hooks/useCart";
import { CardItem } from "../CardItem";
import { Title, Quantity, OrderContainer, ItemsDisplay } from "./style";
import { formtCoin } from "@/utils/formatterCoin";

export function Order() {

  const { productList } = useCart()

  const cartLength = productList.length
  const sumPrices = productList.reduce((accumulator,currentValue)=> accumulator + currentValue.amountPrice,0)

  return (
    <OrderContainer>
      <div>
        <Title>Seu carrinho</Title>
        <Quantity>Total de ( {cartLength} produtos ) <strong>{formtCoin.format(sumPrices)}</strong></Quantity>
      </div>
      <ItemsDisplay>
        { cartLength === 0 && <span>Sem item no carrinho</span>}
        {productList.map(item => <CardItem key={item.id} product={item} />)}
      </ItemsDisplay> 
    </OrderContainer>
  )
}