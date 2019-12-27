import styled from 'styled-components';
import { lighten } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(-90deg, ${lighten(0.3, '#ff8008')}, #ff8008);
  height: 100%;
`;

export const Title = styled.h3`
  font-size: 36px;
  color: #ff8008;
  margin-bottom: 32px;
  margin-top: 16px;
  font-weight: normal;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 32px;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: #fff;
  width: 100%;
  max-width: 900px;
  height: 700px;
  border-radius: 5px;

  h2 {
    margin-bottom: 32px;
    font-weight: normal;
  }
`;

export const ButtonHome = styled(Link)`
  color: #fff;
  background-color: #ff8008;
  text-transform: uppercase;
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 8px;
`;
