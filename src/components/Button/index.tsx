import { ButtonContainer } from './styles';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function Button({ label, ...rest }: ButtonProps) {
  return <ButtonContainer {...rest}> {label}</ButtonContainer>;
}
