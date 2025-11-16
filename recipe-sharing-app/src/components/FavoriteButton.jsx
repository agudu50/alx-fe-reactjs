import { useRecipeStore } from './recipeStore';

const FavoriteButton = ({ recipeId }) => {
  const { favorites, addFavorite, removeFavorite } = useRecipeStore(
    (state) => ({
      favorites: state.favorites,
      addFavorite: state.addFavorite,
      removeFavorite: state.removeFavorite,
    })
  );

  const isFavorite = favorites.includes(recipeId);

  const handleClick = () => {
    if (isFavorite) removeFavorite(recipeId);
    else addFavorite(recipeId);
  };

  return (
    <button onClick={handleClick} style={{ marginLeft: '10px' }}>
      {isFavorite ? ' Remove Favorite' : ' Add to Favorites'}
    </button>
  );
};

export default FavoriteButton;
