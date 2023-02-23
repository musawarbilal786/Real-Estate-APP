import { View, Text, StyleSheet, Image, StatusBar } from 'react-native'
import React from 'react'
import Logo from "../../sourcefiles/assets/img/realestate.jpg"
import LottieView from 'lottie-react-native'
import COLORS from '../consts/colors'

export default function SplashScreen() {
  return (
    <View style={styles.container}>

      <StatusBar translucent backgroundColor={COLORS.transparent} />
      
      
      <View style={styles.container}>
      
      </View>

      <View style={styles.container}>
      <Image source={Logo} style={styles.logo}/>
      </View>

      <View style={styles.container}>
      <LottieView style={{height:100, width:100}} source={require('../../sourcefiles/assets/img/loading.json')} autoPlay loop/>
      <Text>© Copyright 2022</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent: "center",
        backgroundColor:"white",
        flex:1,
    },
    
    logo:{
      height:200,
      width:200,

    }
})