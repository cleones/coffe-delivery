import { SuccessesContainer, SuccessesTitle, SuccessesContent } from './styles';
import { OrderInfo } from './OrderInfo';
import Illustration from '../../assets/Illustration.png';

export function Successes() {
  return (
    <SuccessesContainer>
      <SuccessesTitle>
        <strong>Uhu! Pedido confirmado</strong>
        <span>Agora é só aguardar que logo o café chegará até você </span>
      </SuccessesTitle>
      <SuccessesContent>
        <OrderInfo />
        <img src={Illustration} alt={''} />
      </SuccessesContent>
    </SuccessesContainer>
  );
}
