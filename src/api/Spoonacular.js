import Config from "./Config";

export async function searchRecipe(searchTerm = "", page = 1) {
  try {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${Config.api_keys}&query=${searchTerm}&number=20`;
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(`Error with function Spoonacular: ${error.message}`);
    throw error;
  }
}
/*
export async function randomRecipe(searchTerm = "", page = 1) {
    try {
      const url = `https://api.spoonacular.com/recipes/random?apiKey=${Config.api_keys}&number=10&page=${page}&language=fr-FR`;
      const response = await fetch();
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(`Error with function Spoonacular: ${error.message}`);
      throw error;
    }
  }
*/
