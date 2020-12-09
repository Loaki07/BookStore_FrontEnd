import React, { useContext } from 'react';
import { configure, mount, shallow } from 'enzyme';
import { render, screen } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import { BookStoreProvider, BookStoreContext } from '../context-api/BookStoreContext';
import RegistrationForm from '../components/RegistrationForm.jsx';

configure({ adapter: new Adapter() });

describe('Login', () => {
  const wrapper = mount(
    <BookStoreProvider>
      <RegistrationForm />
    </BookStoreProvider>
  );
  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should have an fullName field', () => {
    expect(wrapper.find('Field[name="fullName"]').length).toEqual(1);
  });

  it('should have an emailId field', () => {
    expect(wrapper.find('Field[name="emailId"]').length).toEqual(1);
  });

  it('should have an password field', () => {
    expect(wrapper.find('Field[name="password"]').length).toEqual(1);
  });
  
  it('should have an mobileNumber field', () => {
    expect(wrapper.find('Field[name="mobileNumber"]').length).toEqual(1);
  });
});