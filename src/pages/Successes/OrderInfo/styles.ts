import styled from 'styled-components';

export const OrderInfoContainer = styled.div`
  width: 33rem;
  height: auto;
  border-image-slice: 1;
  border-radius: 6px 36px;

  //border-image-source: linear-gradient(to left, #dbac2c, #8047f8);
  border: double 3px transparent;

  background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, #dbac2c, #8047f8);
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

export const Items = styled.div`
  margin: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

interface IconWrapperProps {
  backgroundColor: 'purple' | 'yellow' | 'yellow-dark';
}

export const IconWrapper = styled.div<IconWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  padding: 8px;
  border-radius: 50%;
  background: ${(props) => props.theme[props.backgroundColor]};

  svg {
    fill: ${(props) => props.theme.white};
  }
`;

export const TextInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }

  strong {
    font-weight: 700;
  }
`;
