import React from 'react'
import { SafeAreaView, StyleSheet, StatusBar, Pressable, View,  Image, Text } from 'react-native'
import COLORS from '../consts/colors';

const OnBoardScreen = ({navigation}) => {

    return (
    <SafeAreaView
    style={{flex:1, backgroundColor: COLORS.white}}>
        <StatusBar translucent backgroundColor={COLORS.transparent} />
        <Image style={styles.image}
        source={require('../assets/img/onboardimage.jpg')} />
        <View style={styles.indicatorContainer}>
            <View style={styles.indicator}/>
            <View style={styles.indicator}/>
            <View style={[styles.indicator, styles.indicatorActive]}/>
        </View>
        <View style={{paddingHorizontal: 20, paddingTop: 40}}>
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <Text style={styles.title}>FIND YOUR SWEET HOME</Text>
            </View>
            <View style={{marginTop: 20, justifyContent:'center', alignItems:'center'}}>
                <Text style={styles.textStyleA}>
                SCHEDULE YOUR VISIT IN JUST A FEW CLICKS
                </Text>
                <Text></Text>
                <Text style={styles.textStyleB}>
                    <Text style={{}}>Darab Estate</Text> is Pakistan’s Largest
                </Text>
                <Text style={styles.textStyleB}>
                    Online Real Estate Portal within
                </Text>
                <Text style={styles.textStyleB}>
                     & outside the country
                </Text>
                
            </View>
        </View>
        <View style={{flex:1, justifyContent: 'flex-start', paddingBottom: 40, marginTop:10}}>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <Image source={require('../assets/img/realestate.jpg')} style={{height:50,width:50}}/>
                </View>
            <Pressable onPress={()=> navigation.navigate("HomeScreen")}>
                <View style={styles.btn}>
                    <Text style={{color: COLORS.white, fontSize:15}}>Get Started</Text>
                </View>
            </Pressable>
        </View>
    </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    image:{
        height: 430,
        width: '100%',
        borderBottomLeftRadius: 100,
    },
    indicatorContainer:{
        height: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    indicator:{
        height:3,
        width:35,
        backgroundColor: COLORS.gray,
        marginHorizontal:5,
    },
    indicatorActive:{
        backgroundColor: COLORS.dark,
    },
    title:{
        fontSize:29,
        fontWeight:'bold',
        color: 'black',

    },
    textStyleA:{
        fontSize: 15,
        color: '#969696',
        fontWeight:'bold'
    },
    textStyleB:{
        fontSize: 16,
        color: 'black',
    },
    btn:{
        height:60,
        marginTop:15,
        marginHorizontal:20,
        backgroundColor: COLORS.dark,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
    }
});

export default OnBoardScreen;