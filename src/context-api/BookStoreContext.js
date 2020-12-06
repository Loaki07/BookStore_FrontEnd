import React, { useState, createContext } from 'react';

export const BookStoreContext = createContext();

export const BookStoreProvider = (props) => {
  const [state, setState] = useState({
    loginUserEmailId: '',
    loginUserPassword: '',
    fullName: '',
    emailId: '',
    password: '',
    mobileNumber: '',
    toggleLogInSignUp: true,
    bookArray: [],
  });

  return (
    <div>
      <BookStoreContext.Provider value={[ state, setState ]}>
        {props.children}
      </BookStoreContext.Provider>
    </div>
  );
};
