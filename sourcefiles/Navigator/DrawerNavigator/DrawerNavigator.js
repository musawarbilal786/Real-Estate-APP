import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'
import Ionicicons from "react-native-vector-icons/Ionicons"
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from '../../screens/Home';
import Setting from '../../screens/Setting';
import UserProfile from '../../screens/Userprofile';
import Logout from '../../screens/Logout'
import BottomNavigator from '../BottomNavigator/BottomNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    const navigation = useNavigation();

  return (
    <Drawer.Navigator>
        <Drawer.Screen name='HomeContainer' component={BottomNavigator}/>
        
        <Drawer.Screen name= "Logout" component={Logout}
        options={{
            drawerIcon:() => <DrawerIconsContainer name="log-out"/>
        }}
        />
        
        
        {/* <Drawer.Screen name='Log out' component={() => {
            return (
                <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
                    <Text>Click here to Logout</Text>
                    <TouchableOpacity style={{marginTop:15, backgroundColor:"red", padding:10}} onPress={() => navigation.navigate("Login")}>
                        <Text style={{color:"white"}}>LOGOUT</Text>
                    </TouchableOpacity>

                </View>
            );
            }}/> */}

       
        {/*<Drawer.Screen name= "Home" component={Home}
        options={{
            drawerIcon:() => <DrawerIconsContainer name="home"/>
        }}
        />

        <Drawer.Screen name= "Setting" component={Setting}
        options={{
            drawerIcon:() => <DrawerIconsContainer name="settings"/>
        }}
        />
        <Drawer.Screen name= "UserProfile" component={UserProfile}
        options={{
            drawerIcon:() => <DrawerIconsContainer name="person"/>
        }}
        /> */}
    </Drawer.Navigator>
  );
}

const DrawerIconsContainer = (props) => {
    return <Ionicicons name={props.name} size={20}/>
}
