import {
  Background,
  HeroContainer,
  HeroContent,
  Info,
  Item,
  Items,
  SubTitle,
  Title,
  Titles,
} from './styles';
import HeroLogo from '../../../assets/hero-logo.png';
import { ReactComponent as ShopCart } from '../../../assets/shopping-cart-fill.svg';
import { ReactComponent as Package } from '../../../assets/package-fill.svg';
import { ReactComponent as Time } from '../../../assets/timer-fill.svg';
import { ReactComponent as Coffee } from '../../../assets/coffee-fill.svg';

export function Hero() {
  return (
    <HeroContainer>
      <Background />
      <HeroContent>
        <Info>
          <Titles>
            <Title>Encontre o café perfeito para qualquer hora do dia</Title>
            <SubTitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </SubTitle>
          </Titles>
          <Items>
            <Item iconBackground="yellow-dark">
              <div>
                <ShopCart />
              </div>
              <span>Compra simples e segura</span>
            </Item>
            <Item iconBackground="base-text">
              <div>
                <Package />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </Item>
            <Item iconBackground="yellow">
              <div>
                <Time />
              </div>
              <span>Entrega rápida e rastreada</span>
            </Item>
            <Item iconBackground="yellow">
              <div>
                <Coffee />
              </div>
              <span>O café chega fresquinho até você</span>
            </Item>
          </Items>
        </Info>
        <img src={HeroLogo} alt="Hero Logo" width={476} height={360} />
      </HeroContent>
    </HeroContainer>
  );
}
