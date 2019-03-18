import React from "react";
// import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import VehiclesScreen from './screens/Vehicles';
import SettingsScreen from './screens/Settings';
import AddVehicle from './screens/AddVehicle';

const HomeStack = createStackNavigator({
  Home: VehiclesScreen,
  Settings: SettingsScreen,
  AddVehicle: AddVehicle
},
{
  initialRouteName: "Home"
});
 
// const SettingsStack = createBottomTabNavigator({
//   Settings: SettingsScreen,
//   Profile: ProfileScreen,
// });

// const TabNavigator = createBottomTabNavigator(
//   {
//     Home: HomeStack,
//     Settings: SettingsStack,
//   }
// );

const AppContainer = createAppContainer(HomeStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}