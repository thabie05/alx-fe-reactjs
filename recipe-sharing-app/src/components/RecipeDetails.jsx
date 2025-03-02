import { useParams, Link } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

const RecipeDetails = () => {
  const { id } = useParams();
  const { recipes, favorites, addFavorite, removeFavorite } = useRecipeStore();
  const recipe = recipes.find(r => r.id === Number(id));
  const isFavorite = favorites.includes(Number(id));

  const handleFavorite = () => {
    isFavorite ? removeFavorite(recipe.id) : addFavorite(recipe.id);
  };

  if (!recipe) return <div className="error">Recipe not found</div>;

  return (
    <div className="recipe-details">
      <h1>{recipe.title}</h1>
      <div className="actions">
        <button onClick={handleFavorite} className="favorite-button">
          {isFavorite ? '❤️ Remove Favorite' : '♡ Add Favorite'}
        </button>
        <Link to="/" className="back-link">« Back to All Recipes</Link>
      </div>
      <p className="description">{recipe.description}</p>
      {/* Add more recipe details as needed */}
    </div>
  );
};
export default RecipeDetails;