import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput, Dimensions, Pressable } from 'react-native'
import React from 'react'
import {Card} from 'react-native-shadow-cards';
import { useNavigation } from '@react-navigation/native';

import SignUpIcon from '../../sourcefiles/assets/img/signup_icon.png'


export default function SignUp() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={SignUpIcon} style={styles.icon}/>
      <Text style={{marginTop:15, fontSize: 15, fontWeight: "bold", color: "#ba55d3" }}>Register Here</Text>
      
      <TextInput
        style={[styles.input, {marginTop:40}]}
        placeholder= "Full Name"
      />
      <TextInput
        style={styles.input}
        placeholder= "Phone No"
      />
      <TextInput
        style={styles.input}
        placeholder= "Email"
      />
      <TextInput
        style={styles.input}
        placeholder= "Password"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder= "Confirm Password"
        secureTextEntry={true}
      />
      <Pressable> 
          <Card style={[styles.cardStyle, {marginTop:50}]}>
            <Text style={{textAlign:'center', fontWeight: 'bold', color: 'white'}}>Create New Account</Text>
          </Card>
        </Pressable>

      <TouchableOpacity style={{marginTop:15}} onPress={() => navigation.navigate("Login")}>
        <Text style={{color:"#4169e1"}}>Already Have Account</Text>
      </TouchableOpacity>


    </View>
  )
}

const {width} = Dimensions.get("screen")

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent: "center",
        backgroundColor:"white",
        flex:1,
        backgroundColor:""
    },
    
    icon:{
      height:150,
      width:150,
      marginLeft:10,
    },

    input:{
        width: width - 40,
        backgroundColor:"white",
        borderWidth: 1,
        borderColor:'gray',
        borderRadius:8,
        marginTop: 20,
        padding: 10,
      },

      cardStyle:{
        padding: 15,
        margin: 10,
        marginTop: 30,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3cb371',
      }
})