import React, { useContext, useState } from 'react';
import { configure, mount, shallow } from 'enzyme';
import { render, screen } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import { BookStoreProvider, BookStoreContext, useBookStoreContext } from '../context-api/BookStoreContext';
import LoginForm from '../components/LoginForm.jsx';

configure({ adapter: new Adapter() });

describe('Login', () => {
  const wrapper = mount(
    <BookStoreProvider>
      <LoginForm />
    </BookStoreProvider>
  );
  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should have an email field', () => {
    expect(wrapper.find('Field[name="emailId"]').length).toEqual(1);
  });

  it('should have an password field', () => {
    expect(wrapper.find('Field[name="password"]').length).toEqual(1);
  });

  it('should have proper props for email field', () => {
    expect(wrapper.find('Field[name="emailId"]').props()).toEqual({
      type: 'email',
      placeholder: 'Email Id',
      className: 'form-control',
      name: 'emailId',
      value: "",
      onInput: expect.any(Function),
      onChange: expect.any(Function),
      autoComplete: 'off',
    });
  });

  it('should have proper props for password field', () => {
    expect(wrapper.find('Field[name="password"]').props()).toEqual({
      type: 'password',
      placeholder: 'Password',
      className: 'form-control',
      name: 'password',
      value: '',
      onInput: expect.any(Function),
      onChange: expect.any(Function),
      autoComplete: 'off',
    });
  });

  // it('password field should have new value onchange', () => {
  //   const passwordField = wrapper.find('Field[type="password"]');
  //   passwordField.props().onChange({target: {
  //     name: 'password',
  //     value: '123456',
  //   }});
  //   passwordField.simulate('change');
  //   // wrapper.update();
    // expect(wrapper.find('Field[name="password"]').prop('value')).toEqual(
    //   '123456'
  //   );
  // });

  // it('username field should have new value onchange', (done) => {
  //   const emailField = wrapper.find('Field[name="emailId"]');
  //   console.log(emailField.props().value = 'kakashi.hatake@gmail.com');
  //   emailField.simulate('change', {
  //     target: {
  //       name: 'emailId',
  //       value: 'kakashi.hatake@gmail.com',
  //     },
  //   });
  //   expect(wrapper.find('Field[name="emailId"]').prop('value')).toEqual(
  //     'kakashi.hatake@gmail.com');
  //   done();
  // });

  // it('username field should have new value onchange', (done) => {
  //   // const [testState, setTestState] = useState({
  //   //   loginUserEmailId: '',
  //   //   loginUserPassword: '',
  //   //   isLoggedIn: false,
  //   // });
  //   const contextValues = {
  //     loginUserEmailId: '',
  //     loginUserPassword: '',
  //     isLoggedIn: false
  //   }
  //   jest
  //     .spyOn(BookStoreContext, useBookStoreContext)
  //     .mockImplementation(() => contextValues);
  //   const container = mount(
  //     <BookStoreProvider>
  //       <LoginForm />
  //     </BookStoreProvider>
  //   );
  //   expect(container.find('Field[name="emailId"]').prop('loginUserEmailId')).toBe('')
  //   done();
  // });
});
