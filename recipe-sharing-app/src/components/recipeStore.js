import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  
  // Actions
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

  // Update existing actions to trigger filtering
  addRecipe: (newRecipe) => {
    set(state => ({ recipes: [...state.recipes, newRecipe] }));
    get().filterRecipes();
  },
  
  deleteRecipe: (id) => {
    set(state => ({ recipes: state.recipes.filter(r => r.id !== id) }));
    get().filterRecipes();
  },
  
  updateRecipe: (id, updatedRecipe) => {
    set(state => ({
      recipes: state.recipes.map(r => 
        r.id === id ? { ...r, ...updatedRecipe } : r
      )
    }));
    get().filterRecipes();
  },
  
  setRecipes: (recipes) => {
    set({ recipes });
    get().filterRecipes();
  }
}));

export default useRecipeStore;