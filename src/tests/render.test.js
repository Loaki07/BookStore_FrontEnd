import React from 'react';
import { configure, shallow } from 'enzyme';
import { render, screen } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

configure({ adapter: new Adapter() });

describe('rendering component', () => {
  it('renders app component without crashing', () => {
    shallow(<App />);
  })
});
