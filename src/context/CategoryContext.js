import React, { createContext, useState } from 'react';

// Create Context
export const CategoryContext = createContext();

// Provder -> functions and state
export const CategoryProvider = (props) => {
  const [hello, saveHello] = useState('hello Context');

  return <CategoryContext.Provider value={{ hello, saveHello }}>{props.children}</CategoryContext.Provider>;
};

export default CategoryProvider;
