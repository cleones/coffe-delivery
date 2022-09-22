import styled from 'styled-components';

export const CheckoutContainer = styled.form`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;
  padding-bottom: 5rem;
`;

export const Title = styled.h2`
  font-family: 'Baloo 2', cursive;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
export const InfoForm = styled.div`
  width: 40rem;
  padding: 2.5rem;

  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
`;

export const Separator = styled.div`
  border: 1px solid ${(props) => props.theme['base-button']};
  width: 100%;
  margin: 1.5rem 0;
`;

export const AddressesFormWrapper = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-areas:
    'zipcode - -'
    'street street street'
    'number complement complement'
    'district city state';
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 0.75rem 1rem;
`;
