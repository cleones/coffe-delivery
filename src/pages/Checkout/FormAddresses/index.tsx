import { AddressesFormWrapper } from '../styles';
import Input from '../../../components/Input';
import { useFormContext } from 'react-hook-form';

export function FormAddresses() {
  const { register } = useFormContext();

  return (
    <AddressesFormWrapper>
      <div style={{ gridArea: 'zipcode' }}>
        <Input required placeholder="CEP" {...register('cep')} />
      </div>
      <div style={{ gridArea: 'street' }}>
        <Input required placeholder="Rua" {...register('rua')} />
      </div>
      <div style={{ gridArea: 'number' }}>
        <Input required placeholder="Número" {...register('numero')} />
      </div>
      <div style={{ gridArea: 'complement' }}>
        <Input placeholder="complemento" {...register('complemento')} />
      </div>
      <div style={{ gridArea: 'district' }}>
        <Input required placeholder="Bairro" {...register('bairro')} />
      </div>
      <div style={{ gridArea: 'city' }}>
        <Input required placeholder="Cidade" {...register('cidade')} />
      </div>
      <div style={{ gridArea: 'state' }}>
        <Input required placeholder="UF" {...register('uf')} />
      </div>
    </AddressesFormWrapper>
  );
}
