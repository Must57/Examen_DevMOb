import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favRecipeIDs: [],
};

const favRecipeSlice = createSlice({
  name: "favRecipe",
  initialState: initialState,
  reducers: {
    favRecipe(state, action) {
      state.favRecipeIDs.push(action.payload);
    },
    unfavRecipe(state, action) {
      state.favRecipeIDs = state.favRecipeIDs.filter((id) => id !== action.payload);
    },
  },
});

export const { favRecipe, unfavRecipe} = favRecipeSlice.actions;
export default favRecipeSlice.reducer;
