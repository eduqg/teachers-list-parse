import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 32px 10%;
`;

export const HeaderLeft = styled.div`
  color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.img`
  height: 40px;
`;

export const HeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ButtonHeader = styled(Link)`
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.6);
  text-decoration: none;
  font-weight: normal;

  &:hover {
    color: orange;
  }
`;
