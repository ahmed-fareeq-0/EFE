import React, {useContext} from 'react';

import IntroScreen from './IntroScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import HomeScreen from './HomeScreen';
import { Context } from '../context/Provider';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();
const Navigation = () => {
  
  const {userInfo} = useContext(Context)
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Intro"
        >
          {
            !userInfo.token ? (
              <>
                <Drawer.Screen name="Intro" component={IntroScreen} />
                <Drawer.Screen name="Login" component={LoginScreen} />
                <Drawer.Screen name="Register" component={RegisterScreen} />
              </>
            ) : (
              <>
                <Drawer.Screen name="Home" component={HomeScreen} />
              </>
            )

          }
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  )
}

export default Navigation