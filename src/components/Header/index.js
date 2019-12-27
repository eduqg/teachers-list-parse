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
        <Link to="/" id="link-home">
          <Logo src={logo} />
        </Link>
      </HeaderLeft>
      <HeaderRight>
        <ButtonHeader to="/list" id="link-teachers">
          Professores
        </ButtonHeader>
      </HeaderRight>
    </Container>
  );
}
