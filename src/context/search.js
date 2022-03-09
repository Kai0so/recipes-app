import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchIngredients, fetchName, fetchFirstLetter } from '../services/Api';

export const SearchContext = createContext();
SearchContext.displayName = 'Search'; // isso aqui serve para aparecer com o nome correto na extenção do navegador para context

export function SearchProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState('');
  const error = 'Sorry, we haven\'t found any recipes for these filters.';

  async function SearchByIngredient(ingredient) {
    const result = await fetchIngredients(ingredient, currentPage);
    if (result.meals === null || result.drinks === null) {
      global.alert(error);
      return;
    }
    setRecipes(result);
  }

  async function SearchByName(name) {
    const result = await fetchName(name, currentPage);
    if (result.meals === null || result.drinks === null) {
      global.alert(error);
      return;
    }
    setRecipes(result);
  }

  async function SearchByLetter(letter) {
    const result = await fetchFirstLetter(letter, currentPage);
    if (result.meals === null || result.drinks === null) {
      global.alert(error);
      return;
    }
    setRecipes(result);
  }

  const context = {
    SearchByIngredient,
    SearchByName,
    SearchByLetter,
    setCurrentPage,
    recipes,
  };

  return (
    <SearchContext.Provider value={ context }>
      {children}
    </SearchContext.Provider>
  );
}

SearchProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};