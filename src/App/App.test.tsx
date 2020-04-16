import React from 'react';
import chai, { expect } from 'chai';
import Enzyme, { mount } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

chai.use(chaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });

describe('App', (): void => {
  describe('Smoke Tests', (): void => {
    it('Should exist the App module', (): void => {
      const wrapper = mount(<App />);
      expect(wrapper).to.exist;
    });
  });
});