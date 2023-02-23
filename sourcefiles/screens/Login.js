import { React, useState } from 'react'
import { View, Text, Image, TouchableOpacity, Pressable, SafeAreaView, StatusBar, StyleSheet, TextInput, Dimensions, Modal } from 'react-native'
import LottieView from 'lottie-react-native'
import { Card } from 'react-native-shadow-cards';
import COLORS from '../consts/colors';
import { useNavigation } from '@react-navigation/native';

import LoginIcon from '../../sourcefiles/assets/img/login_icon.png'
import FBLogo from '../assets/img/fblogo.png'
import GoogleLogo from '../assets/img/google.png'


export default function Login() {

  const navigation = useNavigation();
  const [modelOpen, setModelOpen] = useState(false);

  function modalhandle() {
    setModelOpen(true)
    setTimeout(() => {
      navigation.navigate("OnBoardScreen");
      setTimeout(() => {
        setModelOpen(false);
      }, 1000);
    }, 1000);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <StatusBar translucent backgroundColor= "gray" />
      <View style={styles.container}>
        <Image source={LoginIcon} style={styles.icon} />
        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#ba55d3" }}>SIGN IN HERE</Text>

        <Card style={[styles.inputcard, { marginTop: 50, backgroundColor: "white" }]}>
          <TextInput
            style={[styles.input]}
            placeholder="Enter Your Email"
          />
        </Card>

        <Card style={[styles.inputcard, { marginTop: 0, backgroundColor: "white" }]}>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Password"
            secureTextEntry={true}
          />
        </Card>

        <Pressable onPress={() => {
          modalhandle()
        }}>
          <Card style={styles.cardStyle}>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'white' }}>LOGIN</Text>
          </Card>
        </Pressable>

        <TouchableOpacity style={{ marginTop: 15, }} onPress={() => navigation.navigate("SignUp")}>
          <Text style={{ color: "#b22222" }}>Don't have an Account</Text>
        </TouchableOpacity>

        <Pressable>
          <View style={styles.fbBtnView}>
            <Image source={FBLogo} style={{ height: 32, width: 15 }} />
            <Text style={styles.fbTextStyle}>Login with Facebook</Text>
          </View>
        </Pressable>

        <Pressable>
          <View style={styles.googleBtnView}>
            <Image source={GoogleLogo} style={{ height: 32, width: 32 }} />
            <Text style={styles.googleTextStyle}>Login with Google</Text>
          </View>
        </Pressable>

        <Modal
          transparent={true}
          visible={modelOpen}
          animationType='none'>
          <View style={styles.modalView}>
            <LottieView style={{ height: 80, width: 80 }} source={require('../../sourcefiles/assets/img/loaderoverlay.json')} autoPlay loop />
            <Text style={styles.modalText}>  Loading...</Text>
          </View>
        </Modal>

      </View>
    </SafeAreaView>
  )
}

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 70,
    flex: 1,
    backgroundColor: "#f5f5f5"
  },

  icon: {
    height: 150,
    width: 150,
  },

  input: {
    width: width - 50,
    borderWidth: 0,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },

  inputcard: {
    width: width - 40,
    padding: 1,
    margin: 20,
    marginTop: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4169e1',
  },

  cardStyle: {
    padding: 15,
    margin: 10,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3cb371',
  },

  modalText: {
    fontSize: 16,
    color: 'white',

  },


  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000AA',
  },

  fbBtnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 10,
    marginTop: 40,
    elevation: 2,
    backgroundColor: '#3b5998',
  },

  fbTextStyle: {
    marginLeft: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },

  googleBtnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 10,
    marginTop: 15,
    elevation: 2,
    backgroundColor: 'white',
  },

  googleTextStyle: {
    marginLeft: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  }

})