import {
  ItemOrderCost,
  OrderCostContainer,
  OrderCostLabel,
  OrderCostValue,
  OrderTotalCost,
} from './styles';
import { useShopCart } from '../../../context/ShopCartContext';

export function OrderCost() {
  const { totalCost } = useShopCart();
  const total = totalCost();
  const send = 3.5;

  const formattedValue = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
  }).format(total);

  const formattedSend = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
  }).format(send);

  const formattedTotalCost = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
  }).format(total + send);
  return (
    <OrderCostContainer>
      <ItemOrderCost>
        <OrderCostLabel>Total de items</OrderCostLabel>
        <OrderCostValue>R$ {formattedValue}</OrderCostValue>
      </ItemOrderCost>

      <ItemOrderCost>
        <OrderCostLabel>Entrega</OrderCostLabel>
        <OrderCostValue>R$ {formattedSend}</OrderCostValue>
      </ItemOrderCost>

      <ItemOrderCost>
        <OrderTotalCost>Total</OrderTotalCost>
        <OrderTotalCost>R$ {formattedTotalCost}</OrderTotalCost>
      </ItemOrderCost>
    </OrderCostContainer>
  );
}
