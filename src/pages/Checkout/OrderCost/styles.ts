import styled from 'styled-components';

export const OrderCostContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ItemOrderCost = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OrderCostLabel = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;

  color: ${(props) => props.theme['base-text']};
`;

export const OrderCostValue = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;

  color: ${(props) => props.theme['base-text']};
`;

export const OrderTotalCost = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;

  color: ${(props) => props.theme['base-subtitle']};
`;
