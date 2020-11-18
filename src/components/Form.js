import React, { useContext, useState } from 'react';
import { CategoryContext } from '../context/CategoryContext';
import { RecipesContext } from '../context/RecipesContext';

const Form = () => {
  const [search, setSearch] = useState({
    ingredient: '',
    category: ''
  });

  const { categories } = useContext(CategoryContext);
  const { searchRecipe, setFetchFlag } = useContext(RecipesContext);

  const getDataRecipe = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    });
  };

  const hadleSubmit = (e) => {
    e.preventDefault();
    searchRecipe(search);
    setFetchFlag(true);
  };

  return (
    <form className='col-12' onSubmit={hadleSubmit}>
      <fieldset className='text-center'>
        <legend>Search recipes by drink or ingredients</legend>
      </fieldset>

      <div className='row mt-4'>
        <div className='col-md-4'>
          <input type='text' name='ingredient' className='form-control' placeholder='Search by ingredient' onChange={getDataRecipe} />
        </div>

        <div className='col-md-4'>
          <select name='category' className='form-control' onChange={getDataRecipe}>
            <option value=''>--- Choose Category ---</option>
            {categories.map((category) => (
              <option key={category.strCategory}>{category.strCategory}</option>
            ))}
          </select>
        </div>

        <div className='col-md-4'>
          <input type='submit' className='btn btn-block btn-primary' value='Search Drinks' />
        </div>
      </div>
    </form>
  );
};

export default Form;
