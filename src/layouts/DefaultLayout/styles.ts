import styled from 'styled-components';

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);

  margin: 0 auto;
  padding: 0 2.5rem;

  background: ${(props) => props.theme['base-background']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`;
