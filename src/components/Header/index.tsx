import { Actions, HeaderContainer } from './styles';
import LogoCoffee from '../../assets/Logo.svg';
import { ReactComponent as MapPin } from '../../assets/map-pin-fill.svg';
import { ButtonSmall } from '../ButtonSmall';
import { ButtonCard } from '../ButtonCard';
import { useShopCart } from '../../context/ShopCartContext';
import { useLocation, useNavigate } from 'react-router-dom';

export function Header() {
  const { totalItem } = useShopCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleRedirect = () => {
    if (location.pathname === '/') {
      navigate('/checkout');
    }
  };

  return (
    <HeaderContainer>
      <img src={LogoCoffee} width={86} alt="" />
      <Actions>
        <ButtonSmall
          label="Porto Alegre, RS"
          disabled
          icon={MapPin}
          variation="purple"
        />
        <ButtonCard count={totalItem()} onClick={handleRedirect} />
      </Actions>
    </HeaderContainer>
  );
}
