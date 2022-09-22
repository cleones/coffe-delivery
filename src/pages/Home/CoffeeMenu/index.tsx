import { CoffeeList, CoffeeMenuContainer, CoffeeTitle } from './styles';
import { CoffeeCard } from './CoffeeCard';
import { Coffees } from '../coffees';

export function CoffeeMenu() {
  return (
    <CoffeeMenuContainer>
      <CoffeeTitle>Nossos cafés</CoffeeTitle>
      <CoffeeList>
        {Coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </CoffeeMenuContainer>
  );
}
