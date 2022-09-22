import {
  Actions,
  CoffeeSelectedContainer,
  Details,
  Name,
  Value,
} from './styles';
import { Coffees } from '../../Home/coffees';
import { Counter } from '../../../components/Counter';
import { useShopCart } from '../../../context/ShopCartContext';
import { ButtonSmall } from '../../../components/ButtonSmall';
import { ReactComponent as Trash } from '../../../assets/trash-regular.svg';

interface CoffeeSelectedProps {
  item: {
    coffeeId: number;
    count: number;
  };
}

export function CoffeeSelected({ item }: CoffeeSelectedProps) {
  const coffee = Coffees.find((coffee) => coffee.id === item.coffeeId);
  const { addItem, removeItem, deleteItem } = useShopCart();

  if (!coffee) {
    return null;
  }

  const formattedValue = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
  }).format(coffee.value);
  return (
    <CoffeeSelectedContainer>
      <img src={coffee.image} alt={coffee.name} width={64} height={64} />
      <Details>
        <Name>{coffee.name}</Name>
        <Actions>
          <Counter
            count={item.count}
            removeCallback={() => removeItem(item.coffeeId)}
            addCallback={() => addItem(item.coffeeId, coffee.value)}
          />
          <ButtonSmall
            icon={Trash}
            label="REMOVER"
            onClick={() => deleteItem(item.coffeeId)}
          />
        </Actions>
      </Details>

      <Value>R$ {formattedValue}</Value>
    </CoffeeSelectedContainer>
  );
}
