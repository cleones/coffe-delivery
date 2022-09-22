import { ButtonIconContainer } from './styles';
import { ButtonHTMLAttributes, FC, SVGProps } from 'react';

interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: FC<SVGProps<SVGSVGElement>>;
  variation?: 'yellow' | 'purple' | 'base';
}

export function ButtonIcon({
  icon: Icon,
  variation = 'base',
  ...rest
}: ButtonIconProps) {
  return (
    <ButtonIconContainer variation={variation} {...rest}>
      <Icon />
    </ButtonIconContainer>
  );
}
