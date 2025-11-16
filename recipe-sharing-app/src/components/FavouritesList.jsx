import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const FavouritesList = () => {
  const favourites = useRecipeStore((state) =>
    state.favorites
      .map((id) => state.recipes.find((recipe) => recipe.id === id))
      .filter(Boolean)
  );

  return (
    <div>
      <h2>My Favourites</h2>
      {favourites.length === 0 && <p>No favourites yet.</p>}
      {favourites.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '10px' }}>
          <h3>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavouritesList;
