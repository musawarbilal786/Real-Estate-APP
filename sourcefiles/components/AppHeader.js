import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import { Surface } from 'react-native-paper'

const AppHeader = (navigation) => {
    return (
        <Surface style={styles.header}>
            <View style={{marginLeft:20}}>
                    <Feather
                        name='arrow-left'
                        size={25}
                        style={{ color: '#15273F'}}
                        onPress={navigation.goBack}
                    />
            </View>
            <View style={{}}>
                <Text style={styles.headerText}>Account</Text>
            </View>
            <View style={{marginRight:20}}>
                <Pressable>
                    <Feather
                        name='share-2'
                        size={25}
                        style={{ color: '#15273F'}}
                        />
                </Pressable>
            </View>
        </Surface>
    )
}

export default AppHeader

const styles = StyleSheet.create({
    header: {
        height: 50,
        elevation: 4,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    headerText:{
        fontSize:20,
        fontWeight:'bold',
        color: '#15273F'
    }
})