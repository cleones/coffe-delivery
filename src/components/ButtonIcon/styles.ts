import styled from 'styled-components';

const ButtonConfig = {
  yellow: {
    backgroundColor: 'yellow-dark',
    backgroundColorHover: 'yellow-light',
  },
  purple: {
    backgroundColor: 'purple-dark',
    backgroundColorHover: 'purple',
  },
  base: {
    backgroundColor: 'base-title',
    backgroundColorHover: 'base-subtitle',
  },
} as const;

interface ButtonIconContainerProps {
  variation: keyof typeof ButtonConfig;
}

export const ButtonIconContainer = styled.button<ButtonIconContainerProps>`
  display: flex;
  align-items: center;
  padding: 0.5rem;

  background: ${(props) =>
    props.theme[ButtonConfig[props.variation].backgroundColor]};
  border: 0;
  border-radius: 6px;
  cursor: pointer;

  svg {
    fill: ${(props) => props.theme.white};
  }

  :disabled {
    cursor: default;
  }

  &:not(:disabled):hover {
    ${(props) =>
      `background: ${
        props.theme[ButtonConfig[props.variation].backgroundColorHover]
      }`}
  }
`;
