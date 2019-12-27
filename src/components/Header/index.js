import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Logo,
  HeaderLeft,
  HeaderRight,
  ButtonHeader,
} from './styles';

import logo from '../../assets/logo-cinza.png';

export default function Header() {
  return (
    <Container>
      <HeaderLeft>
        <Link to="/">
          <Logo src={logo} />
        </Link>
      </HeaderLeft>
      <HeaderRight>
        <ButtonHeader to="/list">Professores</ButtonHeader>
      </HeaderRight>
    </Container>
  );
}
