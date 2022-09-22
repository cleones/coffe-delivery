import { CoffeeSelected } from '../CoffeeSelected';
import { Separator } from '../styles';

interface Item {
  coffeeId: number;
  count: number;
}

interface ListCoffeeSelectedProps {
  items: Item[];
}

export function ListCoffeeSelected({ items }: ListCoffeeSelectedProps) {
  return (
    <>
      {items.map((item: Item) => (
        <div key={item.coffeeId}>
          <CoffeeSelected item={item} />
          <Separator />
        </div>
      ))}
    </>
  );
}
