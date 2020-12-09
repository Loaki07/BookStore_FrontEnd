import React, { useState, createContext, useContext } from 'react';

export const BookStoreContext = createContext();

export const BookStoreProvider = (props) => {
  const [state, setState] = useState({
    loginUserEmailId: '',
    loginUserPassword: '',
    isLoggedIn: false,
    fullName: '',
    emailId: '',
    password: '',
    mobileNumber: '',
    toggleLogInSignUp: true,
    bookArray: [],
    pages: '',
    page: '',
    cart: [],
    wishlist: [],
    customerFullName: '',
    customerMobileNumber: '',
    customerAddress: '',
    customerCity: '',
    customerState: '',
  });

  return (
    <div>
      <BookStoreContext.Provider value={[state, setState]}>
        {props.children}
      </BookStoreContext.Provider>
    </div>
  );
};

export const useBookStoreContext = () => useContext(BookStoreContext);
