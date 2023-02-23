import { View, Text, TextBase } from 'react-native'
import React from 'react'

import Ionicicons from "react-native-vector-icons/Ionicons"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import Home from '../../screens/Home';
import Setting from '../../screens/Setting';
import UserProfile from '../../screens/Userprofile';

const Tab = createMaterialBottomTabNavigator();

export default function MaterialBottomNavigator() {
  return (
    <Tab.Navigator shifting={true} activeColor='white' inactiveColor='#d3d3d3' barStyle={{ backgroundColor: '#778899' }}>
        <Tab.Screen name="Home" component={Home}
        options={{tabBarIcon:() => <MaterialIconContainer name="home"/>}}
        />
        <Tab.Screen name="Setting" component={Setting}
        options={{tabBarIcon:() => <MaterialIconContainer name="settings"/>}}
        />
        <Tab.Screen name="UserProfile" component={UserProfile} 
        options={{tabBarIcon:() => <MaterialIconContainer name="person"/>}}
        />
    </Tab.Navigator>
  )
}

const MaterialIconContainer = props => {
    return <Ionicicons name={props.name} size={20} color={"white"} />
}