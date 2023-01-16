import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Keyboard,
  Text,
  randomColor
} from "react-native";


import Search from "../components/Search";

const SearchPage = ({ navigation }) => {


  return (
    <View style={styles.container}>
        <Search/>
    </View>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    marginTop: 16,
  },
  homeContainer: {
    marginBottom: 16,
  },
});