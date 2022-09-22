import { ButtonSmallContainer } from './styles';
import { ButtonHTMLAttributes, FC, SVGProps } from 'react';

interface ButtonSmallProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: FC<SVGProps<SVGSVGElement>>;
  label: string;
  variation?: 'yellow' | 'purple' | 'base';
}

export function ButtonSmall({
  icon: Icon,
  label,
  variation = 'base',
  ...rest
}: ButtonSmallProps) {
  return (
    <ButtonSmallContainer variation={variation} {...rest}>
      <Icon />
      <span>{label}</span>
    </ButtonSmallContainer>
  );
}
