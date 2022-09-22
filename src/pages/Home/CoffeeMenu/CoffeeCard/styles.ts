import styled from 'styled-components';

export const CoffeeCardContainer = styled.div`
  position: relative;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;

  width: 256px;
  height: 310px;
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  img {
    position: absolute;
    top: -25px;
  }
`;

export const CoffeeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-bottom: 1rem;
`;

export const CoffeeName = styled.span`
  font-family: 'Baloo 2', cursive;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
`;

export const CoffeeDescription = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: ${(props) => props.theme['base-label']};
`;
