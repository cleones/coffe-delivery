import styled from 'styled-components';

interface CardSelectContainerProps {
  active?: boolean;
}

export const CardSelectContainer = styled.button<CardSelectContainerProps>`
  padding: 1rem 0.5rem 1rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.45rem;
  border-radius: 6px;
  border: 0;
  min-width: 178px;
  background: ${(props) => props.theme['base-button']};
  cursor: pointer;

  svg {
    fill: ${(props) => props.theme.purple};
  }

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;
    text-transform: uppercase;

    color: ${(props) => props.theme['base-subtitle']};
  }

  :focus {
    outline: 0;
    box-shadow: none;
  }

  :hover {
    ${(props) => !props.active && `background: ${props.theme['base-hover']}}`}
  }

  ${(props) => {
    if (props.active) {
      return `
          background: ${props.theme['purple-light']};
          border: 1px solid ${props.theme.purple};
       `;
    }
  }}
`;
