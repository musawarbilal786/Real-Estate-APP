import React from 'react'
import { View, Text } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicicons from "react-native-vector-icons/Ionicons"

import Home from '../../screens/Home';
import Setting from '../../screens/Setting';
import UserProfile from '../../screens/Userprofile';

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home} 
        options={{
          tabBarIcon:() => <BottomIconsContainer name="home"/>,
          headerShown: false
        }}
        />
        <Tab.Screen name='Setting' component={Setting} 
        options={{
          tabBarIcon:() => <BottomIconsContainer name="settings"/>,
          headerShown: false
        }}
        />
        <Tab.Screen name='UserProfile' component={UserProfile}
        options={{
          tabBarIcon:() => <BottomIconsContainer name="person"/>,
          headerShown: false
        }}
        />
      </Tab.Navigator>
  )
}

const BottomIconsContainer = props => {
  return <Ionicicons name={props.name} size={25}/>;
};