import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderLeft = styled.div`
  color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 32px;
  margin-bottom: 16px;
  margin-top: 16px;
`;

export const Logo = styled.img`
  margin: 0 16px;
  height: 40px;
`;

export const HeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 32px;
  margin-bottom: 16px;
  margin-top: 16px;
`;

export const ButtonHeader = styled(Link)`
  margin: 0 16px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.6);
  text-decoration: none;
  font-weight: normal;

  &:hover {
    color: orange;
  }
`;
