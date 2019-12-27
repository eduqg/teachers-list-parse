import React from 'react';
import List from '../../src/pages/List';

describe('List', () => {
  it('renders', () => {
    mount(<List />);

    expect(true).toBe(true);
  });

  it('should display search input', () => {
    const wrapper = mount(<List />);

    expect(wrapper.find('input[type="text"]')).toHaveLength(1);
  });
});
