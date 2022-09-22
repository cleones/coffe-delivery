import { Section, Title } from '../styles';
import { ListCoffeeSelected } from '../ListCoffeeSelected';
import { OrderCost } from '../OrderCost';
import { useShopCart } from '../../../context/ShopCartContext';
import { Button } from '../../../components/Button';
import { ButtonWrapper, ResumeOrder } from './styles';

export function ItemsOrder() {
  const { items, shopInfos } = useShopCart();

  const disabledButton =
    !shopInfos.cep ||
    !shopInfos.rua ||
    !shopInfos.numero ||
    !shopInfos.bairro ||
    !shopInfos.cidade ||
    !shopInfos.uf;

  return (
    <Section>
      <Title>Cafés selecionados</Title>
      <ResumeOrder>
        <ListCoffeeSelected items={items} />
        <OrderCost />
        <ButtonWrapper>
          <Button label="Confirmar" disabled={disabledButton} />
        </ButtonWrapper>
      </ResumeOrder>
    </Section>
  );
}
