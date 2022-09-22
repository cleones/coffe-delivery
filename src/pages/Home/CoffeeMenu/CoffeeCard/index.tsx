import { coffeeDTO } from '../../../../DTO/Coffe';
import { Buy } from './Buy';
import { Tag } from './Tag';
import {
  CoffeeCardContainer,
  CoffeeDescription,
  CoffeeInfo,
  CoffeeName,
  Tags,
} from './styles';

interface CoffeeCardProp {
  coffee: coffeeDTO;
}

export function CoffeeCard({ coffee }: CoffeeCardProp) {
  return (
    <CoffeeCardContainer>
      <img src={coffee.image} alt={'Café com leite'} />
      <Tags>
        {coffee.features.map((feature) => (
          <Tag key={feature} label={feature} />
        ))}
      </Tags>
      <CoffeeInfo>
        <CoffeeName>{coffee.name}</CoffeeName>
        <CoffeeDescription>{coffee.description}</CoffeeDescription>
      </CoffeeInfo>
      <Buy value={coffee.value} coffeeId={coffee.id} />
    </CoffeeCardContainer>
  );
}
