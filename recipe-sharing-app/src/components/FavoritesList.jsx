import { Link } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

const FavoritesList = () => {
  const { favorites, recipes, removeFavorite } = useRecipeStore();
  
  const favoriteRecipes = favorites.map(id => 
    recipes.find(r => r.id === id)
  ).filter(Boolean);

  return (
    <div className="favorites-section">
      <h2>⭐ Favorite Recipes</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorites yet! Add some from recipe details.</p>
      ) : (
        favoriteRecipes.map(recipe => (
          <div key={recipe.id} className="recipe-item favorite">
            <Link to={`/recipes/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>
            <button 
              onClick={() => removeFavorite(recipe.id)}
              className="icon-button"
            >
              ♡ Remove Favorite
            </button>
          </div>
        ))
      )}
    </div>
  );
};