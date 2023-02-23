import React from 'react'
import { View, Text, Pressable, StyleSheet, ToastAndroid } from 'react-native'
import Ionic from 'react-native-vector-icons/Ionicons'
import Toast from 'react-native-toast-message';

export default function EditProfile({ navigation }) {

  // const { fullname, useremail, profileImage } = route.params;
  var fullname = "Musawar Bilal";
  var useremail = "musawarbilal02@gmail.com";
  profileImage = require("../assets/img/person.jpg");

  const TostMessage = () => {
    Toast.show({
      type: 'success',
      text1: 'Edited Successfully',
      text2: 'Changes are Saved'
    })
  }

  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
      }}>
      <Toast />
      <View
        style={styles.header}>
        <Pressable onPress={navigation.goBack}>
          <Ionic name='close-outline' style={{ fontSize: 35 }} />
        </Pressable>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Edit Profile</Text>
        <Pressable onPress={() => {
          TostMessage();
          //navigation.goBack()
        }}>
          <Ionic name='checkmark' style={{ fontSize: 35, color: '#3493D9' }} />
        </Pressable>
      </View>
      <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Edit Profile</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  }
})