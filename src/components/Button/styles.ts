import styled from 'styled-components';

export const ButtonContainer = styled.button`
  color: ${(props) => props.theme.white};

  width: 100%;
  background: ${(props) => props.theme.yellow};
  padding: 0.75rem 0.5rem;
  height: 46px;
  border-radius: 6px;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 160%;
  text-transform: uppercase;
  border: 0;
  cursor: pointer;

  :not(:disabled):hover {
    background: ${(props) => props.theme['yellow-dark']};
  }

  :disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
