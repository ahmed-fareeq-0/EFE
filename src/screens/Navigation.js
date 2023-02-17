import { View, Text } from 'react-native'
import React from 'react'


import IntroScreen from './IntroScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Navigation = () => {
  return (
    <>
    <NavigationContainer>
      <Drawer.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Intro"
        >
        <Drawer.Screen name="Intro" component={IntroScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Register" component={RegisterScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    </>
  )
}

export default Navigation