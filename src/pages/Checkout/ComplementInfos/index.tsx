import { ReactComponent as MapPin } from '../../../assets/map-pin-line-regular.svg';
import { ReactComponent as Dolar } from '../../../assets/currenc-dollar-regular.svg';

import { FormTitle } from '../FormTitle';
import { FormAddresses } from '../FormAddresses';

import { InfoForm, Section, Title } from '../styles';
import { FormPayment } from '../FormPayment';

export function ComplementInfos() {
  return (
    <Section>
      <Title>Complete seu pedido</Title>
      <InfoForm>
        <FormTitle
          icon={MapPin}
          variation="yellow-dark"
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
        />
        <FormAddresses />
      </InfoForm>
      <InfoForm>
        <FormTitle
          icon={Dolar}
          variation="purple"
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        />
        <FormPayment />
      </InfoForm>
    </Section>
  );
}
