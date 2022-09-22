import { ReactComponent as MapPin } from '../../../assets/map-pin-fill.svg';
import { ReactComponent as Timer } from '../../../assets/timer-fill.svg';
import { ReactComponent as Dollar } from '../../../assets/currenc-dollar-regular.svg';
import {
  Item,
  Items,
  OrderInfoContainer,
  IconWrapper,
  TextInfoWrapper,
} from './styles';
import { useShopCart } from '../../../context/ShopCartContext';

const PaymentLabel = {
  credit: 'Cartão de Credito',
  debit: 'Cartão de Debito',
  cash: 'Dinherio',
};

export function OrderInfo() {
  const { shopInfos } = useShopCart();
  return (
    <OrderInfoContainer>
      <Items>
        <Item>
          <IconWrapper backgroundColor="purple">
            <MapPin />
          </IconWrapper>
          <TextInfoWrapper>
            <span>
              Entrega em{' '}
              <strong>
                {shopInfos.rua}, {shopInfos.numero}
              </strong>
            </span>
            {'\n'}
            <span>
              {shopInfos.cidade} - {shopInfos.uf}
            </span>
          </TextInfoWrapper>
        </Item>
        <Item>
          <IconWrapper backgroundColor="yellow">
            <Timer />
          </IconWrapper>
          <TextInfoWrapper>
            <span>Previsão de entrega</span>
            <strong>20 min - 30 min</strong>
          </TextInfoWrapper>
        </Item>
        <Item>
          <IconWrapper backgroundColor="yellow-dark">
            <Dollar />
          </IconWrapper>
          <TextInfoWrapper>
            <span>Pagamento na entrega</span>
            <strong>{PaymentLabel[shopInfos.paymentType]}</strong>
          </TextInfoWrapper>
        </Item>
      </Items>
    </OrderInfoContainer>
  );
}
