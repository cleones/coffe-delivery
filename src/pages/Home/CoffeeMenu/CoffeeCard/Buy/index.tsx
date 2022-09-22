import { Actions, BuyContainer, Value } from './styles';
import { ReactComponent as ShoppingCart } from '../../../../../assets/shopping-cart-fill.svg';
import { useShopCart } from '../../../../../context/ShopCartContext';
import { ButtonIcon } from '../../../../../components/ButtonIcon';
import { Counter } from '../../../../../components/Counter';

interface BuyProp {
  value: number;
  coffeeId: number;
}

export function Buy({ coffeeId, value }: BuyProp) {
  const { addItem, removeItem, items } = useShopCart();
  const count = items.find((item) => item.coffeeId === coffeeId)?.count || 0;

  const formattedValue = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
  }).format(value);

  return (
    <BuyContainer>
      <Value>
        <span>R$</span>
        <strong>{formattedValue}</strong>
      </Value>
      <Actions>
        <Counter
          count={count}
          removeCallback={() => removeItem(coffeeId)}
          addCallback={() => addItem(coffeeId, value)}
        />
        <ButtonIcon
          icon={ShoppingCart}
          variation="purple"
          onClick={() => addItem(coffeeId, value)}
        />
      </Actions>
    </BuyContainer>
  );
}
