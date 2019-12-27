describe('Students CRUD', () => {
  before(() => {
    cy.visit('/');
  });

  it('Should be on home page', () => {
    cy.contains('Seja bem-vindo!').should('be.visible');
  });

  it('Should go to teachers page', () => {
    cy.contains('Veja os nossos professores').click();
    cy.get("input[name='pesquisa']").should('be.visible');
  });

  it('Should list teachers', () => {
    cy.wait(1000);
    cy.contains('João da Silva Roberto').should('be.visible');
    cy.contains('Josefa Pinheiro Rocha').should('be.visible');
  });

  it('Should query teacher case insensitive', () => {
    cy.get("input[name='pesquisa']").type('jOÃo DA silVa');
    cy.wait(1000);
    cy.contains('João da Silva Roberto').should('be.visible');
  });

  it('Should clear search', () => {
    cy.get("input[name='pesquisa']").clear();
    cy.wait(1000);
    cy.contains('Josefa Pinheiro Rocha').should('be.visible');
  });

  it('Should show modal with description', () => {
    cy.get("button[name='Josefa Pinheiro Rocha']").click();
    cy.contains(
      'Estudante de Física na UnB. Durante a graduação participei de projetos na área de relatividade. As aulas são voltadas para entender e conseguir superar as dificuldades dos alunos principalmente através da resolução de exercícios.'
    ).should('be.visible');
  });

  it('Should close modal', () => {
    cy.get("button[name='fechar']").click();
    cy.contains(
      'Estudante de Física na UnB. Durante a graduação participei de projetos na área de relatividade. As aulas são voltadas para entender e conseguir superar as dificuldades dos alunos principalmente através da resolução de exercícios.'
    ).should('be.not.visible');
  });
});
