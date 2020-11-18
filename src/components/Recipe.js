import React, { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';

const Recipe = ({ recipe }) => {
  const { setRecipeId } = useContext(ModalContext);

  return (
    <div className='col-md-4 mb-3'>
      <div className='card'>
        <div className='card-header'>{recipe.strDrink}</div>
        <img className='card-img-top' src={recipe.strDrinkThumb} alt={recipe.strDrink} />
        <div className='card-body'>
          <button
            type='button'
            className='btn btn-block btn-primary'
            onClick={() => {
              setRecipeId(recipe.idDrink);
            }}
          >
            Ver receta
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
