import styled from 'styled-components';

const ButtonConfig = {
  yellow: {
    iconColor: 'yellow-dark',
    labelColor: 'yellow',
    backgroundColor: 'yellow-light',
  },
  purple: {
    iconColor: 'purple',
    labelColor: 'purple-dark',
    backgroundColor: 'purple-light',
  },
  base: {
    iconColor: 'purple',
    labelColor: 'base-text',
    backgroundColor: 'base-button',
  },
} as const;

interface ButtonSmallContainerProps {
  variation: keyof typeof ButtonConfig;
}

export const ButtonSmallContainer = styled.button<ButtonSmallContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem;

  background: ${(props) =>
    props.theme[ButtonConfig[props.variation].backgroundColor]};
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  svg {
    fill: ${(props) => props.theme[ButtonConfig[props.variation].iconColor]};
  }

  span {
    color: ${(props) => props.theme[ButtonConfig[props.variation].labelColor]};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
  }
  :disabled {
    cursor: default;
  }

  &:not(:disabled):hover {
    ${(props) => {
      return props.variation === 'base'
        ? `background: ${props.theme['base-hover']}`
        : `opacity: 80%;`;
    }}
  }
`;
