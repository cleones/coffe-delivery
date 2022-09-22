import styled from 'styled-components';

export const CounterContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: space-around;
  width: 4.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme['base-button']};

  span {
    font-size: 16px;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }

  button {
    border: 0;
    background: transparent;
    svg {
      fill: ${(props) => props.theme.purple};
    }
  }
`;
