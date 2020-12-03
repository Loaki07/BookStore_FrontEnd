import React, { useState, createContext } from 'react';

export const BookStoreContext = createContext();

export const BookStoreProvider = (props) => {
  const [users, setUsers] = useState({
    toggleLogInSignUp: false,
    message: 'baseState',
  });

  return (
    <div>
      <BookStoreContext.Provider value={[users, setUsers]}>
        {props.children}
      </BookStoreContext.Provider>
    </div>
  );
};
