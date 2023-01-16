import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

import SearchPage from "../screens/SearchPage";
import Search from "../components/Search";

import Colors from "../defintions/Colors";
import Assets from "../defintions/Assets";

const SearchNavigation = createStackNavigator();
const FavNavigation = createStackNavigator();
const TabNavigation = createBottomTabNavigator();



function SearchStack() {
  return (
    <SearchNavigation.Navigator initialRouteName="ViewSearch">
      <SearchNavigation.Screen
        name="ViewSearch"
        component={Search}
        tabBarStyle={styles.tabBar}
        options={{
          title: "Recherche",
          backgroundColor: Colors.primary,
        }}
      />
    </SearchNavigation.Navigator>
  );
}

function FavStack() {
  return (
    <FavNavigation.Navigator initialRouteName="ViewFav">
      <FavNavigation.Screen
        name="ViewFav"
        component={SearchPage}
        options={{ title: "Favoris" }}
      />
    </FavNavigation.Navigator>
  );
}


function RootStack() {
  return (
    <TabNavigation.Navigator
      style={{ display:"flex",justifyContent:"center",}}
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: "black",
        headerShown: false,
        tabBarStyle:{
          backgroundColor: "white",
        }
      }}>
      <TabNavigation.Screen
        name="Search"
        component={SearchStack}
        options={() => ({
           tabBarLabel:() => {return null},
           tabBarIcon: ({ color }) => {
            return (
              <Image source={Assets.icons.searchIcon} style={{ tintColor: color,height: 30,width: 30 }} />
            );
          },
        })}
      />
      <TabNavigation.Screen
        name="Favoris"
        component={FavStack}
        options={() => ({
           tabBarLabel:() => {return null},
           tabBarIcon: ({ color }) => {
            return (
              <Image source={Assets.icons.favIcon} style={{ tintColor: color,height: 30,width: 30 }} />
            );
          },
        })}
      />
      
    </TabNavigation.Navigator>
  );
}

export default RootStack;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Colors.primary,
  },
});