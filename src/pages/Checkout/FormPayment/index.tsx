import { FormPaymentContainer } from './styles';
import { CardSelect } from '../../../components/CardSelect';
import { ReactComponent as CreditCard } from '../../../assets/credit-card-regular.svg';
import { useShopCart } from '../../../context/ShopCartContext';

export function FormPayment() {
  const { shopInfos, updateShopInfo } = useShopCart();

  return (
    <FormPaymentContainer>
      <CardSelect
        icon={CreditCard}
        active={shopInfos.paymentType === 'credit'}
        label="Cartão de crédito"
        onClick={() => updateShopInfo({ paymentType: 'credit' })}
      />
      <CardSelect
        icon={CreditCard}
        active={shopInfos.paymentType === 'debit'}
        label="cartão de débito"
        onClick={() => updateShopInfo({ paymentType: 'debit' })}
      />
      <CardSelect
        icon={CreditCard}
        active={shopInfos.paymentType === 'cash'}
        label="Dinheiro"
        onClick={() => updateShopInfo({ paymentType: 'cash' })}
      />
    </FormPaymentContainer>
  );
}
