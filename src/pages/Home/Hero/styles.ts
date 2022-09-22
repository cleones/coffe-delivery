import styled from 'styled-components';
import img from '../../../assets/Background.svg';

export const HeroContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 34rem;
  filter: blur(50px);
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
`;

export const HeroContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 3.5rem;
`;

export const Info = styled.div`
  height: 100%;
  display: flex;
  gap: 5rem;
  flex-direction: column;
  align-content: center;
`;

export const Titles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.p`
  font-family: 'Baloo 2', cursive;
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 130%;
  color: ${(props) => props.theme['base-title']};
`;

export const SubTitle = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 20px;
`;

interface InfoProps {
  iconBackground: 'yellow' | 'yellow-dark' | 'base-text' | 'purple';
}

export const Item = styled.div<InfoProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme[props.iconBackground]};
    border-radius: 50%;
    padding: 0.5rem;

    svg {
      fill: ${(props) => props.theme.white};
      width: 20px;
      height: 20px;
    }
  }
  & span {
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }
`;
