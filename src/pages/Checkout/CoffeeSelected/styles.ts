import styled from 'styled-components';

export const CoffeeSelectedContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  background: ${(props) => props.theme['base-card']};
`;
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-left: 1.25rem;
`;

export const Name = styled.span`
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Value = styled.span`
  flex: 1;
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
  text-align: right;

  color: ${(props) => props.theme['base-text']};

  align-self: flex-start;
  justify-self: flex-end;
  //margin-left: 3.5rem;
`;
