import { ButtonHTMLAttributes } from 'react';
import { ReactComponent as ShopCart } from '../../assets/shopping-cart-fill.svg';
import { Badge, ButtonCardContainer } from './styles';

interface ButtonCardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  count?: number;
}

export function ButtonCard({ count = 0, ...rest }: ButtonCardProps) {
  return (
    <ButtonCardContainer {...rest}>
      {count > 0 && <Badge>{count}</Badge>}
      <ShopCart />
    </ButtonCardContainer>
  );
}
