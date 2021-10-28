import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createAppContainer } from "react-navigation";
import {
  MaterialCommunityIcons,
  Octicons,
  FontAwesome5,
} from "@expo/vector-icons";

import DefaultText from "../components/texts/DefaultText";

import Colors from "../constants/Colors";
import RefrigeratorScreen from "../screens/tabnavigationscreens/RefrigeratorScreen";
import PantryScreen from "../screens/tabnavigationscreens/PantryScreen";
import StatisticsScreen from "../screens/tabnavigationscreens/StatisticsScreen";
import ListsScreen from "../screens/tabnavigationscreens/ListsScreen";
import ProfileScreen from "../screens/tabnavigationscreens/ProfileScreen";
import ListAdditionScreen from "../screens/ListAdditionScreen";

const ListsNavigator = createStackNavigator({
  Lists: ListsScreen,
  Addition: ListAdditionScreen,
});

const bottomTabScreenConfig = {
  Refrigerator: {
    screen: RefrigeratorScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <MaterialCommunityIcons
            name="fridge"
            size={25}
            color={Colors.primarygray}
          />
        );
      },
      tabBarColor: Colors.whitecolor,
      tabBarLabel: <DefaultText>Hűtő</DefaultText>,
    },
  },
  Pantry: {
    screen: PantryScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <MaterialCommunityIcons
            name="food-variant"
            size={25}
            color={Colors.primarygray}
          />
        );
      },
      tabBarColor: Colors.whitecolor,
      tabBarLabel: <DefaultText>Kamra</DefaultText>,
    },
  },
  Stats: {
    screen: StatisticsScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Octicons name="graph" size={25} color={Colors.primarygray} />;
      },
      tabBarColor: Colors.whitecolor,
      tabBarLabel: <DefaultText>Statisztikák</DefaultText>,
    },
  },
  Lists: {
    screen: ListsScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <FontAwesome5
            name="clipboard-list"
            size={25}
            color={Colors.primarygray}
          />
        );
      },
      tabBarColor: Colors.whitecolor,
      tabBarLabel: <DefaultText>Listák</DefaultText>,
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <FontAwesome5 name="user-alt" size={25} color={Colors.primarygray} />
        );
      },
      tabBarColor: Colors.whitecolor,
      tabBarLabel: <DefaultText>Profil</DefaultText>,
    },
  },
};

const MainScreenTabNavigator =
  Platform.OS === "ios"
    ? createBottomTabNavigator(bottomTabScreenConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: "open-sans",
            fontSize: 14,
          },
          activeTintColor: Colors.secondarygray,
        },
      })
    : createMaterialBottomTabNavigator(bottomTabScreenConfig, {
        activeColor: Colors.secondarygray,
        shifting: false,
        barStyle: {
          backgroundColor: Colors.whitecolor,
        },
      });
export default createAppContainer(MainScreenTabNavigator);
