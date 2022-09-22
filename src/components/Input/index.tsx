import { forwardRef, InputHTMLAttributes, useState } from 'react';
import { InputWrapper } from './styles';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;
export type Ref = HTMLInputElement;
// eslint-disable-next-line react/display-name
const Input = forwardRef<Ref, InputProps>((rest, ref) => {
  const [filled, setFilled] = useState(false);

  return (
    <InputWrapper required={rest.required} filled={filled}>
      <input
        {...rest}
        ref={ref}
        onChange={(e) => {
          setFilled(!!e.target.value);
          if (rest.onChange) {
            rest.onChange(e);
          }
        }}
      />
    </InputWrapper>
  );
});
export default Input;
