import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],
  
  // Existing search/filter actions
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },
  
  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const term = searchTerm.toLowerCase();
    const filtered = term === '' 
      ? recipes 
      : recipes.filter(recipe => 
          recipe.title.toLowerCase().includes(term) ||
          recipe.description.toLowerCase().includes(term)
        );
    set({ filteredRecipes: filtered });
  },

  // New favorites actions
  addFavorite: (recipeId) => {
    set(state => ({ 
      favorites: [...state.favorites, recipeId] 
    }));
    get().generateRecommendations();
  },
  
  removeFavorite: (recipeId) => {
    set(state => ({
      favorites: state.favorites.filter(id => id !== recipeId)
    }));
    get().generateRecommendations();
  },

  // New recommendations logic
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
      .slice(0, 5);

    set({ recommendations });
  },

  // Updated existing actions
  addRecipe: (newRecipe) => {
    set(state => ({ recipes: [...state.recipes, newRecipe] }));
    get().filterRecipes();
  },
  
  deleteRecipe: (id) => {
    set(state => ({
      recipes: state.recipes.filter(r => r.id !== id),
      favorites: state.favorites.filter(favId => favId !== id)
    }));
    get().filterRecipes();
    get().generateRecommendations();
  },
  
  updateRecipe: (id, updatedRecipe) => {
    set(state => ({
      recipes: state.recipes.map(r => 
        r.id === id ? { ...r, ...updatedRecipe } : r
      )
    }));
    get().filterRecipes();
    get().generateRecommendations();
  },
  
  setRecipes: (recipes) => {
    set({ recipes });
    get().filterRecipes();
    get().generateRecommendations();
  }
}));

export default useRecipeStore;