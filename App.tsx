// App.js
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { StyleSheet, Text, View } from 'react-native';
import { ThemeContextProvider } from './src/theme'

import MainScreen from './screens/Main';
import SettingsScreen from './screens/Settings';
import TabBar from './src/TabBar';

const TabNavigator = createBottomTabNavigator(
  {
    Main: MainScreen,
    Settings: SettingsScreen,
  },
  {
    tabBarComponent: props => <TabBar {...props} />,
  },
);

const AppContainer = createAppContainer(TabNavigator);


export default function App() {
  return (
   <ThemeContextProvider>
      <AppContainer />
   </ThemeContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
