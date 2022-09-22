import React, { PropsWithChildren, ReactElement, ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { InputProps } from '../Input';

interface FormProps {
  defaultValues: any;
  children: ReactNode;
  onSubmit: () => void;
}

export function Form({ defaultValues, children, onSubmit }: FormProps) {
  const methods = useForm({ defaultValues });
  const { handleSubmit } = methods;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child) => {
        const item = child as ReactElement<PropsWithChildren<InputProps>>;
        return item?.props?.name
          ? React.createElement(item.type, {
              ...{
                ...item.props,
                register: methods.register,
                key: item.props.name,
              },
            })
          : item;
      })}
    </form>
  );
}
