import React, { useContext } from 'react';
import { CategoryContext } from '../context/CategoryContext';

const Form = () => {
  const { categories } = useContext(CategoryContext);

  return (
    <form className='col-12'>
      <fieldset className='text-center'>
        <legend>Search recipes by drink or ingredients</legend>
      </fieldset>

      <div className='row mt-4'>
        <div className='col-md-4'>
          <input type='text' name='ingredient' className='form-control' placeholder='Search by ingredient' />
        </div>

        <div className='col-md-4'>
          <select name='cateogory' className='form-control'>
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
