import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const RecipesContext = createContext();

const RecipesProvider = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [search, searchRecipe] = useState({
    ingredient: '',
    category: ''
  });
  const [fetchFlag, setFetchFlag] = useState(false);

  const { ingredient, category } = search;

  useEffect(() => {
    if (fetchFlag) {
      const getRecipes = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}&c=${category}`;

        const result = await axios.get(url);
        setRecipes(result.data.drinks);
      };
      getRecipes();
    }
  }, [search]);

  return <RecipesContext.Provider value={{ recipes, searchRecipe, setFetchFlag }}>{props.children}</RecipesContext.Provider>;
};

export default RecipesProvider;
