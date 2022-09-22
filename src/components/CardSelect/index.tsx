import { FC, SVGProps } from 'react';
import { CardSelectContainer } from './styles';

interface CardSelectProps {
  icon: FC<SVGProps<SVGSVGElement>>;
  label: string;
  active?: boolean;
  onClick: () => void;
}

export function CardSelect({
  active,
  label,
  icon: Icon,
  onClick,
}: CardSelectProps) {
  return (
    <CardSelectContainer active={active} type="button" onClick={onClick}>
      <Icon />
      <span>{label}</span>
    </CardSelectContainer>
  );
}
