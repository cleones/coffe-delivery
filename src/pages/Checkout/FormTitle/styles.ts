import styled from 'styled-components';

interface FormTitleContainerProps {
  variation: 'yellow-dark' | 'purple';
}

export const FormTitleContainer = styled.div<FormTitleContainerProps>`
  display: flex;
  gap: 0.5rem;

  svg {
    fill: ${(props) => props.theme[props.variation]};
  }
`;

export const TitlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;

export const Title = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  /* identical to box height, or 21px */

  display: flex;
  align-items: center;

  /* Base/Subtitle */

  color: ${(props) => props.theme['base-subtitle']};
`;

export const Subtitle = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;

  display: flex;
  align-items: center;

  color: ${(props) => props.theme['base-text']};
`;
