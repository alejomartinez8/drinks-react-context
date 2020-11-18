import React, { createContext, useEffect, useState } from 'react';
import axion from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {
  const [recipeId, setRecipeId] = useState(null);

  return <ModalContext.Provider value={{ setRecipeId }}>{props.children}</ModalContext.Provider>;
};

export default ModalProvider;
