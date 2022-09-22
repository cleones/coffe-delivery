import styled from 'styled-components';

export const BuyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Value = styled.span`
  display: flex;
  align-items: center;
  gap: 0.2rem;

  color: ${(props) => props.theme['base-text']};
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;

  strong {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 24px;
    line-height: 130%;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
