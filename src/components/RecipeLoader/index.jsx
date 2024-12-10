import { useEffect, useState } from 'react';

const RecipeLoader = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    fetch('https://dummyjson.com/recipes')
      .then((res) => res.json())
      .then(({ recipes }) => {
        setRecipes(recipes);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  const recipesList = recipes.map((recipe) => (
    <li key={recipe.id}>
      <article>
        <h3>{recipe.name}</h3>
        <ol>
          {recipe.instructions.map((step) => <li key={step}>{step}</li>)}
        </ol>
      </article>
    </li>
  ));

  return (
    <article>
      <h2>Our recipes</h2>
      {isLoading && <div>LOADING ...</div>}
      {error && <div>ERROR: {error.message}</div>}
      {recipesList.length > 0 && <ul>{recipesList}</ul>}
    </article>
  );
};

export default RecipeLoader;
