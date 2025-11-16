import { create } from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],

  // Add new recipe
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),

  // Update an existing recipe
  updateRecipe: (updatedRecipe) =>
    set(state => ({
      recipes: state.recipes.map(r =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      ),
    })),

  // Delete a recipe by ID
  deleteRecipe: (id) =>
    set(state => ({
      recipes: state.recipes.filter(r => r.id !== id),
    })),

  // Set the entire list (optional)
  setRecipes: (recipes) => set({ recipes }),
}))

export { useRecipeStore };
