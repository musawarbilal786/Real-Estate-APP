import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import 'react-native-gesture-handler'

//Screens Import
import SplashScreen from '../../screens/SplashScreen'
import Login from '../../screens/Login'
import SignUp from '../../screens/SignUp'

import OnBoardScreen from '../../screens/OnBoardScreen'
import HomeScreen from '../../screens/HomeScreen'
import DetailsScreen from '../../screens/DetailsScreen'
import UserProfile from '../../screens/UserProfile'
import EditProfile from '../../screens/EditProfile'


const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 3000);
  }, [])


  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/*  */}

        {showSplashScreen ? (<Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }} />
        ) : null}

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="OnBoardScreen"
          component={OnBoardScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="UserProfile"
          component={UserProfile}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{ headerShown: false }}
        />

        {/*  */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}