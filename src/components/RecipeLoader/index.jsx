import { useLoadData, useMouseTracker } from '../../hooks';
import { getRecipes } from '../../api';

/*
  користувацьких хук - функція, назва якої починається з use
  та яка містить в собі логіку, що має використовуватися декількома
  різними компонентами. У користувацькому хуку можна використовувати
  інші хуки і він може приймати та повертати будь-які значення (тут все залежить 
  від завдання яке хук вирішує)
*/
// function useLoadRecipes() {
//   const [recipes, setRecipes] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setIsLoading(true);

//     fetch('https://dummyjson.com/recipes')
//       .then((res) => res.json())
//       .then(({ recipes }) => {
//         setRecipes(recipes);
//       })
//       .catch((error) => setError(error))
//       .finally(() => setIsLoading(false));
//   }, []);

//   return {
//     recipes,
//     isLoading,
//     error,
//   };
// }

const RecipeLoader = () => {
  // запуск користувацького хука
  const { data: recipes, isLoading, error } = useLoadData(getRecipes);
  const { x, y } = useMouseTracker();

  // const { recipes, isLoading, error } = useLoadRecipes();

  return (
    <article>
      <h2>Our recipes</h2>
      <p>x: {x}</p>
      <p>y: {y}</p>
      {isLoading && <div>LOADING ...</div>}
      {error && <div>ERROR: {error.message}</div>}
      {recipes && (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <article>
                <h3>{recipe.name}</h3>
                <ol>
                  {recipe.instructions.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </article>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default RecipeLoader;
