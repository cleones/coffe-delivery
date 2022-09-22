import styled from 'styled-components';

export const CoffeeMenuContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3.375rem;
`;

export const CoffeeTitle = styled.h1`
  font-family: 'Baloo 2', cursive;
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
`;

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
`;
