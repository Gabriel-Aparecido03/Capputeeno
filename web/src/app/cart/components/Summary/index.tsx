import { useCart } from "@/hooks/useCart";
import { Helpers } from "../Helpers";
import { SummaryContainer, SummaryTitle, SummaryItensSub, Divider, SummaryItens, ButtonBuy } from "./style";
import { formtCoin } from "@/utils/formatterCoin";

export function Summary() {

  const delivery = 40

  const { productList } = useCart()

  const sumPrices = productList.reduce((accumulator,currentValue)=> accumulator + currentValue.amountPrice,0)
  const finalPrice = sumPrices > 900 ? sumPrices : sumPrices + 40

  return (
    <SummaryContainer>
      <div>
        <SummaryTitle>Resumo do pedido</SummaryTitle>
        <SummaryItensSub>
          <span>Subtotal de produtos</span>
          <p>{formtCoin.format(sumPrices)}</p>
        </SummaryItensSub>
        <SummaryItensSub>
          <span>Entrega</span>
          <p> R$ 40,00 </p>
        </SummaryItensSub>
        <Divider />
        <SummaryItens>
          <span>Total</span>
          <p>{formtCoin.format(finalPrice)}</p>
        </SummaryItens>
        <ButtonBuy>Finalizar compra</ButtonBuy>
      </div>
      <Helpers />
    </SummaryContainer>
  )
}