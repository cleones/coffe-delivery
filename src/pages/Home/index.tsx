import { Hero } from './Hero';
import { CoffeeMenu } from './CoffeeMenu';
import { HomeContainer } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <Hero />
      <CoffeeMenu />
    </HomeContainer>
  );
}
