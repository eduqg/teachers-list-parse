import React from 'react';
import { Router } from 'react-router-dom';
import Home from '../../src/pages/Home';

import history from '../../src/services/history';

describe('Home', () => {
  it('renders', () => {
    mount(
      <Router initialEntries={['/']} history={history}>
        <Home />
      </Router>
    );
  });

  it('should display search input', () => {
    const wrapper = mount(
      <Router initialEntries={['/']} history={history}>
        <Home />
      </Router>
    );

    const textWelcome = wrapper.find({ testid: 'welcome-text' });

    expect(textWelcome.at(0).text()).toBe('Seja bem-vindo!');
  });

  it('should display button to list', () => {
    const wrapper = mount(
      <Router initialEntries={['/']} history={history}>
        <Home />
      </Router>
    );

    const linkList = wrapper.find({ id: 'link-list' });
    expect(linkList.at(0).props().to).toBe('/list');
  });
});
