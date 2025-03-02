import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  recommendations: [],
  
  // Favorites actions
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  
  // Recommendations logic
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const favoriteWords = recipes
      .filter(recipe => favorites.includes(recipe.id))
      .flatMap(recipe => [
        ...recipe.title.toLowerCase().split(/\W+/),
        ...recipe.description.toLowerCase().split(/\W+/)
      ]);
      
    const uniqueWords = [...new Set(favoriteWords)];
    
    const recommendations = recipes
      .filter(recipe => 
        !favorites.includes(recipe.id) &&
        uniqueWords.some(word => 
          recipe.title.toLowerCase().includes(word) ||
          recipe.description.toLowerCase().includes(word)
      ))
      .slice(0, 5); // Show top 5 matches

    set({ recommendations });
  },

  // Update existing actions
  deleteRecipe: (id) => {
    set(state => ({
      recipes: state.recipes.filter(r => r.id !== id),
      favorites: state.favorites.filter(favId => favId !== id)
    }));
    get().generateRecommendations();
  },
}));