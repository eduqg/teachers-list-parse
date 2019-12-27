import React from 'react';
import { Router } from 'react-router-dom';

import { mount, shallow } from 'enzyme';

import Header from '../../src/components/Header';
import history from '../../src/services/history';

describe('Header', () => {
  it('renders component', () => {
    expect(
      shallow(
        <Router initialEntries={['/']} history={history}>
          <Header />
        </Router>
      ).length
    ).toEqual(1);
  });

  it('should have link to calculator', () => {
    const wrapper = mount(
      <Router initialEntries={['/']} history={history}>
        <Header />
      </Router>
    );

    const linkList = wrapper.find({ id: 'link-teachers' });
    expect(linkList.at(0).props().to).toBe('/list');
  });

  it('should have link to home', () => {
    const wrapper = mount(
      <Router initialEntries={['/']} history={history}>
        <Header />
      </Router>
    );

    const linkHome = wrapper.find({ id: 'link-home' });
    expect(linkHome.at(0).props().to).toBe('/');
  });
});
