import React, { useState, createContext } from 'react';

export const BookStoreContext = createContext();

export const BookStoreProvider = (props) => {
  const [state, setState] = useState({
    loginUserEmailId: '',
    loginUserPassword: '',
    toggleLogInSignUp: false,
    message: 'baseState',
  });

  return (
    <div>
      <BookStoreContext.Provider value={[state, setState]}>
        {props.children}
      </BookStoreContext.Provider>
    </div>
  );
};
