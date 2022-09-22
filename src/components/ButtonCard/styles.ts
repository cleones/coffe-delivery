import styled from 'styled-components';

export const ButtonCardContainer = styled.button`
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: 0;

  position: relative;

  background: ${(props) => props.theme['yellow-light']};
  cursor: pointer;

  svg {
    fill: ${(props) => props.theme['yellow-dark']};
  }
`;

export const Badge = styled.span`
  position: absolute;

  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};

  right: -5px;
  top: -5px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-style: normal;
  font-weight: 700;
  font-size: 12px;
`;
