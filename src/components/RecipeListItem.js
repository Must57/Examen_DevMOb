import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import Assets from "../defintions/Assets";
import Colors from "../defintions/Colors";

const RecipeListItem = ({
  RecipeData: { title, summary}
}) => {
  const getPoster = () => {
    if (poster_path) {
      return (
        <Image
          style={styles.poster}
        />
      );
    }
    return (
      <View style={styles.noPoster}>
        <Image source={Assets.icons.missingImgIcon} />
      </View>
    );
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      {getPoster()}
      <View style={styles.informationContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Titre: {title}</Text>
          {isHighlighted ? (
            <Image style={styles.highlight} source={Assets.icons.fav} />
          ) : null}
        </View>
        <Text style={styles.overview} numberOfLines={4}>
          {summary}
        </Text>
        
      </View>
    </TouchableOpacity>
  );
};

RecipeListItem.propTypes = {
  RecipeData: PropTypes.shape({
    title: PropTypes.string,
    summary: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  isHighlighted: PropTypes.bool.isRequired,
};

export default RecipeListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 8,
  },
  informationContainer: {
    flex: 1,
    marginLeft: 12,
    marginTop: 8,
  },
  statsContainer: {
    flexDirection: "row",
    marginTop: 12,
  },
  titleContainer: {
    flexDirection: "row",
  },
  statContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  poster: {
    width: 120,
    height: 180,
    borderRadius: 8,
    backgroundColor: Colors.primary_blue,
  },
  noPoster: {
    width: 120,
    height: 180,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    flex: 1,
  },
  voteAverage: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.primary_blue,
  },
  voteCount: {
    fontSize: 14,
    alignSelf: "flex-end",
    fontStyle: "italic",
  },
  overview: {
    fontSize: 16,
  },
  icon: {
    tintColor: Colors.primary_blue,
    width: 20,
    height: 20,
    marginRight: 4,
  },
  highlight: {
    tintColor: Colors.primary_blue,
    width: 20,
    height: 20,
    marginHorizontal: 4,
    marginTop: 6,
  },
});
