import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SearchContext } from '../../context/search';

function CategButtons({ name }) {
  const {
    getFoodCateg,
    foodCategs,
    getDrinkCateg,
    drinkCategs,
    SearchFoodRecipeByCategory,
    SearchDrinkRecipeByCategory,
  } = useContext(SearchContext);
  const FIVE = 5;

  useEffect(() => {
    getFoodCateg();
    getDrinkCateg();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClick(categoryName) {
    if (name.includes('rink')) {
      SearchDrinkRecipeByCategory(categoryName);
    }
    if (name.includes('ood')) {
      SearchFoodRecipeByCategory(categoryName);
    }
  }

  function handleRender(categories) {
    if (categories !== undefined) {
      return categories.map((category, index) => {
        if (index < FIVE) {
          return (
            <button
              type="button"
              key={ category.strCategory }
              index={ index }
              data-testid={ `${category.strCategory}-category-filter` }
              onClick={ () => handleClick(category.strCategory) }
            >
              { category.strCategory }
            </button>
          );
        }
        return null;
      });
    }
  }

  return (
    <nav>
      {name === 'Drinks'
      && drinkCategs.drinks !== undefined
        ? handleRender(drinkCategs.drinks)
        : handleRender(foodCategs.meals)}
    </nav>
  );
}

CategButtons.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CategButtons;
