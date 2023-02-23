import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Logout() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
        <Text>Click here to Logout</Text>
        <TouchableOpacity style={{marginTop:15, backgroundColor:"red", padding:10}} onPress={() => navigation.navigate("Login")}>
            <Text style={{color:"white"}}>LOGOUT</Text>
        </TouchableOpacity>

    </View>
  );
}