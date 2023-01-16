import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  Keyboard,
  Text,
} from "react-native";
import { useSelector } from "react-redux";

import RecipeListItem from "./RecipeListItem";
import DisplayError from "./DisplayError";

import RecipeInfos from "../helpers/random-1.json";


import Colors from "../defintions/Colors";
import { searchRecipe } from "../api/Spoonacular";

const Search = ({ navigation }) => {
  const [recipe, setRecipe] = useState([]);
  const [RecipeDatas, setRecipeDatas] = useState(RecipeInfos.results);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isMorePages, setIsMorePages] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isError, setIsError] = useState(false);
  const favRecipeIDs = useSelector((state) => state.favRecipe.favRecipeIDs);

  

  const searchRecipe = async (currentRecipe, pageToRequest) => {
    setIsRefreshing(true);
    setIsError(false);
    console.log(
      "Search Recipes; previously " +
        currentRecipe.length +
        " recipes and will request page n° " +
        pageToRequest
    );
    try {
      /*
      const RecipeSearchResult = await RecipeDatas(
        searchTerm,
        pageToRequest
      );*/
      
      setRecipe([...currentPage, ...RecipeD.results]);
      //setCurrentPage(RecipeDatas.page);
      /*RecipeDatas.page == RecipeDatas.total_pages
        ? setIsMorePages(false)
        : setIsMorePages(true);*/
    } catch (error) {
      setIsError(true);
      setRecipe([]);
      setIsMorePages(true);
      setCurrentPage(1);
    }
    setIsRefreshing(false);
  };

  const newSearchRecipe = () => {
    Keyboard.dismiss();
    searchRecipe([], 1);
  };

  const loadMoreRecipes = () => {
    if (isMorePages) {
      searchRecipe(recipe, currentPage + 1);
    }
  };

  const navigateRecipeDetails = (RecipeID) => {
    navigation.navigate("ViewSearch", { RecipeID });
  };

  const isRecipeFaved = (id) => {
    return favRecipeIDs.includes(id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Terme à chercher"
          style={styles.inputSearchTerm}
          onChangeText={(text) => setSearchTerm(text)}
          onSubmitEditing={newSearchRecipe}
        />
        <Button
          title="Rechercher"
          color={Colors.primary_blue}
          onPress={newSearchRecipe}
        />
        
      </View>
      <FlatList
          data={RecipeDatas}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <RecipeListItem recipeData={item}/>
          }
        />
      {isError ? (
        <DisplayError message="Impossible de récupérer les recettes" />
      ) : (
        <Text></Text>
      
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    marginTop: 16,
  },
  searchContainer: {
    marginBottom: 16,
  },
  inputSearchTerm: {
    marginBottom: 16,
  },
});
