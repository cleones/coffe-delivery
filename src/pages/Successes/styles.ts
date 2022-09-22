import styled from 'styled-components';

export const SuccessesContainer = styled.div``;

export const SuccessesTitle = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-dark']};
  }

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`;

export const SuccessesContent = styled.div`
  margin-top: 2.5rem;
  display: flex;

  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
`;
