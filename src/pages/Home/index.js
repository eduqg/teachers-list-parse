import React from 'react';

import { Container, Card, Title, Subtitle, ButtonHome } from './styles';

import logo from '../../assets/logo-cinza.png';

export default function Help() {
  return (
    <Container>
      <Card>
        <img src={logo} alt="logohome" />
        <Title>Seja bem-vindo!</Title>
        <Subtitle>
          Os melhores professores de aulas particulares de brasília a um clique!
        </Subtitle>
        <ButtonHome to="/list" id="link-list">
          Veja os nossos professores
        </ButtonHome>
      </Card>
    </Container>
  );
}
