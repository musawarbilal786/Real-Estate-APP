import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicicons from "react-native-vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native'

export default function Setting() {

  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity style={{alignItems:'center'}}
      onPress={()=> navigation.navigate("Home")}>
      <Ionicicons name="home" size={40} color="gray"/>
      <Text style={{fontSize: 20, fontWeight:'bold', color:'gray'}}>Home</Text>
      </TouchableOpacity>

      <Ionicicons name="settings" size={50} color="red" style={{marginTop: 20}}/>
      <Text style={{fontSize: 40, fontWeight:'bold', color:'red'}}>Settings</Text>

      <TouchableOpacity style={{marginTop:20, alignItems:'center'}}
      onPress={()=> navigation.navigate("UserProfile")}>
      <Ionicicons name="person" size={40} color="lightblue"/>
      <Text style={{fontSize: 20, fontWeight:'bold', color:'lightblue'}}>UserProfile</Text>
      </TouchableOpacity>
    </View>
  )
}