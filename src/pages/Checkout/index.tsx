import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import * as zod from 'zod';

import { useShopCart } from '../../context/ShopCartContext';

import { ComplementInfos } from './ComplementInfos';
import { ItemsOrder } from './ItemsOrder';

import { CheckoutContainer } from './styles';
import { zodResolver } from '@hookform/resolvers/zod';

const formAddressSchema = zod.object({
  cep: zod.string(),
  rua: zod.string(),
  numero: zod.string(),
  bairro: zod.string(),
  cidade: zod.string(),
  complemento: zod.nullable(zod.string()),
  uf: zod.string(),
});
type FormData = zod.infer<typeof formAddressSchema>;

export function Checkout() {
  const { items, shopInfos, updateShopInfo } = useShopCart();
  const navigate = useNavigate();

  const shopForm = useForm<FormData>({
    resolver: zodResolver(formAddressSchema),
    defaultValues: {
      cep: shopInfos.cep,
      rua: shopInfos.rua,
      numero: shopInfos.numero,
      complemento: shopInfos.complemento,
      bairro: shopInfos.bairro,
      cidade: shopInfos.cidade,
      uf: shopInfos.uf,
    },
  });

  const { handleSubmit } = shopForm;

  useEffect(() => {
    if (!items.length) {
      navigate('/');
    }
  }, [items, navigate]);

  const handleConfirm = (data: FormData) => {
    updateShopInfo(data);
    navigate('/success');
  };

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleConfirm)}>
      <FormProvider {...shopForm}>
        <ComplementInfos />
        <ItemsOrder />
      </FormProvider>
    </CheckoutContainer>
  );
}
