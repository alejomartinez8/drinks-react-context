import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {
  const [recipeId, setRecipeId] = useState(null);
  const [infoRecipe, setInfoRecipe] = useState({});

  useEffect(() => {
    const getRecipe = async () => {
      if (!recipeId) return;
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeId}
        `;
      const result = await axios.get(url);
      setInfoRecipe(result.data.drinks[0]);
    };
    getRecipe();
  }, [recipeId]);

  return <ModalContext.Provider value={{ infoRecipe, setRecipeId, setInfoRecipe }}>{props.children}</ModalContext.Provider>;
};

export default ModalProvider;
