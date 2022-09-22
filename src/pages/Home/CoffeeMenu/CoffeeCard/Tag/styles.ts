import styled from 'styled-components';

export const TagContainer = styled.div`
  padding: 4px 8px;
  text-align: center;
  background: ${(props) => props.theme['yellow-light']};
  border-radius: 100px;

  color: ${(props) => props.theme['yellow-dark']};
  font-weight: 700;
  font-size: 10px;
  line-height: 130%;
  text-transform: uppercase;
`;
