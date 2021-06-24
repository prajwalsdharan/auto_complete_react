/* eslint-env mocha */
/* eslint-disable padded-blocks, no-unused-expressions */

import React from 'react';
import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import App from '../App';
import Layout from './Layout';
import Adapter from 'enzyme-adapter-react-16';
import { configure,shallow } from 'enzyme';

const mockStore = configureMockStore();

describe('Layout', () => {
  it('renders children correctly', () => {
    const store = mockStore({});
    configure({adapter: new Adapter()});
    const wrapper = shallow(
      <App store={store}>
        <Layout>
          <div className="child" />
        </Layout>
      </App>,
    );
    expect(wrapper.find('div.child').length).to.eq(1);
  });

});
