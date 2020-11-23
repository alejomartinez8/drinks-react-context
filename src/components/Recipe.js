import React, { useContext, useState } from 'react';
import { ModalContext } from '../context/ModalContext';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    position: 'absolute',
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    overflow: 'scroll',
    height: '100%',
    display: 'block'
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const Recipe = ({ recipe }) => {
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { infoRecipe, setRecipeId, setInfoRecipe } = useContext(ModalContext);

  const showIngredients = (info) => {
    let ingredients = [];
    for (let i = 1; i < 16; i++) {
      if (info[`strIngredient${i}`]) {
        ingredients.push(
          <li>
            {info[`strIngredient${i}`]} {info[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredients;
  };

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
              handleOpen();
            }}
          >
            Ver receta
          </button>
          <Modal
            open={open}
            onClose={() => {
              setRecipeId(null);
              setInfoRecipe({});
              handleClose();
            }}
          >
            <div style={modalStyle} className={classes.paper}>
              <h2>{infoRecipe.strDrink}</h2>
              <h3 className='mt-4'>Instructions</h3>
              <p>{infoRecipe.strInstructions}</p>
              <img className='img-fluid my-4' src={infoRecipe.strDrinkThumb} alt='' />
              <h3>Ingredients</h3>
              <ul>{showIngredients(infoRecipe)}</ul>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
