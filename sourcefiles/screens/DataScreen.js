import React, {useState} from 'react'
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  Dimensions, 
  TouchableOpacity } from 'react-native'

import {Card} from 'react-native-shadow-cards';
import {useNavigation,} from "@react-navigation/native"

export default function HomeScreen({}) {
  const navigationHook = useNavigation();
  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    //console.log(navigationHook);
    

    const handleSubmit = () => {
      navigationHook.navigate('Profile',{
          userName: name,
          userEmail: email,
          userPass: pass,
       });

    }
    // function handleNavigation(screenName){
    //   navigation.navigate(screenName)
    //   }



  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
       {/* <Text style={{fontSize: 40, fontWeight:'bold', color:'gray'}}>Home Screen</Text> */}
      <View>

        <Text style={{textAlign: 'center', marginBottom: 30, fontWeight: 'bold'}}>
          Please Enter Your Information</Text>
        <TextInput
        style={styles.input}
        placeholder= "Enter Your Name"
        value={name}
        onChangeText={(text) => setName(text)}

        />
        <TextInput
        style={styles.input}
        placeholder= "Enter Your Email"
        value= {email}
        onChangeText={(text) => setEmail(text)}
        />
        <TextInput
        style={styles.input}
        placeholder= "Enter Your Password"
        value= {pass}
        onChangeText={(text) => setPass(text)}
        secureTextEntry={true}
        />

        
        <TouchableOpacity onPress={()=> handleSubmit()}> 
          <Card style={styles.cardStyle}>
            <Text style={{textAlign:'center', fontWeight: 'bold', color: 'white'}}>SUBMIT</Text>
          </Card>
        </TouchableOpacity>
        
        

        

        {/* <TouchableOpacity 
        onPress={()=> handleNavigation('Screen1')}
        style={{backgroundColor:'lightblue', padding:20, marginBottom:20}}>
            <Text>Screen1</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={()=> handleNavigation('Screen2')}
        style={{backgroundColor:'lightblue', padding:20, marginBottom:20}}>
            <Text>Screen2</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  )
}

const {width} = Dimensions.get("screen")

const styles = StyleSheet.create({
  input:{
    width: width - 20,
    borderWidth: 2,
    marginTop: 20,
    padding: 10.
  },
  submitButton:{
    width: width - 20,
    backgroundColor: 'lightblue',
    padding: 10,
    marginTop: 20,
    borderRadius: 30,
  },
  cardStyle:{
    padding: 10,
    margin: 10,
    marginTop: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  }
})