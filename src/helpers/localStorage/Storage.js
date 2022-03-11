// import getIngredientsArray from '../IngredientsFunc';

export function handleStorageCompleteRecipes(recipe) {
  const today = new Date();
  const todayDate = `${today.getDate()
  }/${today.getMonth() + 1}/${today.getFullYear()}`;

  if (recipe.idDrink !== undefined) {
    const doneDrinkRecipes = {
      id: recipe.idDrink,
      type: 'drink',
      nationality: recipe.strArea,
      category: recipe.strCategory,
      alcoholicOrNot: recipe.strAlcoholic,
      name: recipe.strDrink,
      image: recipe.strDrinkThumb,
      doneData: todayDate,
      tags: recipe.strTags,
    };
    localStorage.setItem('doneRecipes', JSON.stringify([doneDrinkRecipes]));
  }
  if (recipe.idMeal !== undefined) {
    const doneMealRecipes = {
      id: recipe.idMeal,
      type: 'food',
      nationality: recipe.strArea,
      category: recipe.strCategory,
      alcoholicOrNot: '',
      name: recipe.strMeal,
      image: recipe.strMealThumb,
      doneData: todayDate,
      tags: recipe.strTags,
    };
    localStorage.setItem('doneRecipes', JSON.stringify([doneMealRecipes]));
    console.log('eh o localstorage', doneMealRecipes);
  }
}

export function handleStorageInProgressRecipes(recipe) {
  if (recipe.idDrink !== undefined) {
    const drinkId = recipe.idDrink;
    const cocktails = {
      [drinkId]: 'retornar ingrediente conforme é marcado',
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(cocktails));
  }
  if (recipe.idMeal !== undefined) {
    const mealId = recipe.idMeal;
    const meals = {
      [mealId]: 'perguntar na mentoria o que é para retornar aqui',
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(meals));
  }
}
