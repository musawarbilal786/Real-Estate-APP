import React from 'react'
import {
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Dimensions,
    FlatList,
    Image,
    View,
    Text,
    Alert,
    Pressable
} from 'react-native'
import AwesomeIcon from "react-native-vector-icons/FontAwesome5"
import Icon from 'react-native-vector-icons/MaterialIcons'
import COLORS from '../consts/colors'
import Hyperlink from 'react-native-hyperlink'

const { width } = Dimensions.get("screen");

const DetailsScreen = ({ navigation, route }) => {

    var rating = 4.8;
    var totalratings = 153;
    var OwnerName = "Real Estate CEO"

    const house = route.params;
    const InteriorImage = ({ image }) => {
        return <Image source={image} style={styles.interiorImage} />;
    };
    

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <ScrollView>
                <View style={styles.backgroundImageContainer}>
                    <ImageBackground
                        style={styles.backgroundImage}
                        source={house.image}>
                        <View style={styles.header}>
                            <View style={styles.headerBtn}>
                                <Icon
                                    name='arrow-back-ios'
                                    size={25}
                                    style={{ color: 'black', marginLeft: 7 }}
                                    onPress={navigation.goBack} />
                            </View>
                            <View style={styles.headerBtn}>
                                <Icon
                                    name='favorite'
                                    size={25}
                                    style={{ color: COLORS.red }} />
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={styles.virtualTag}>
                        <Text style={{ color: COLORS.dark }}>Virtual Tour</Text>
                    </View>
                </View>
                <View style={styles.detailsContainer}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: width - 20,
                        }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: COLORS.dark, width: '62%' }}>
                            {house.title}
                        </Text>

                        <View style={styles.priceStyle}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: COLORS.dark }}>
                                Rs: <Text style={{ fontSize: 15, fontWeight: 'bold', color: COLORS.blue }}>{house.price}</Text>
                            </Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: 15, color: COLORS.gray }}>{house.location}</Text>
                    <View style={styles.facilityMainContainer}>
                        <View style={styles.facilityContainer}>
                            <View style={styles.facility}>
                                <Icon name='hotel' size={18} style={{ color: COLORS.dark }} />
                                <Text style={styles.facilityText}>{house.bedrooms}</Text>
                            </View>
                            <View style={styles.facility}>
                                <Icon name='bathtub' size={18} style={{ color: COLORS.dark }} />
                                <Text style={styles.facilityText}>{house.bathrooms}</Text>
                            </View>
                            <View style={styles.facility}>
                                <AwesomeIcon name='ruler-vertical' size={18} style={{ color: COLORS.dark }} />
                                <Text style={styles.facilityText}>{house.area}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.ratingTag}>
                                <Text style={{ color: COLORS.white }}>{rating}</Text>
                            </View>
                            <Text style={{ color: COLORS.dark, marginLeft: 5, marginRight: 5, fontSize: 13 }}>
                                {totalratings} ratings
                            </Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: 18, marginTop: 10, fontWeight: 'bold', color: COLORS.dark }}>Description</Text>
                    <Text style={{ marginTop: 5, color: 'gray', textAlign: 'justify' }}>
                        {house.details}
                    </Text>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: COLORS.dark }}>Photos</Text>
                    <FlatList
                        //keyExtractor={(_, key) => key.toString}
                        contentContainerStyle={{ marginTop: 10 }}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={house.interiors}
                        renderItem={({ item }) => <InteriorImage image={item} />}
                    />
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <View>
                        <Image source={require("../assets/img/owner.jpg")} style={styles.ownerImage} />
                    </View>

                    <View>
                        <Text style={{ fontSize: 16, fontWeight:'500', marginLeft: 10, textAlign: 'left', color: COLORS.dark }}>{OwnerName}</Text>
                        <Text style={{ fontSize: 12, marginLeft: 10, textAlign: 'left'}}>Owner (Real Estate)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', }}>
                    <View style={styles.contactBtn}>
                        <Pressable onPress={() => alert("Owner: Real Estate CEO \nContact: 0301-2345678")}>
                            <Icon name='call' size={30} style={{ color: "white" }} />
                        </Pressable>
                    </View>
                    <View style={styles.whatsappBtn}>
                        <Pressable onPress={() => alert("Owner: Real Estate CEO \nContact: 0301-2345678")}>
                            <Image
                                source={require("../assets/img/icon-whatsapp.png")}
                                style={{ height: 50, width: 50, borderRadius: 25 }}
                            />
                        </Pressable>
                    </View>
                    {/* <Hyperlink
                        //linkDefault={true}
                        onPress={(url, text) => alert(url + ', ' + text)}
                        linkText={(url) => url === 'https://api.whatsapp.com/send?phone=923091201209' ? 'Contact' : url}>
                        <Text style={styles.contactStyle}>https://api.whatsapp.com/send?phone=923091201209</Text>
                    </Hyperlink> */}
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    backgroundImageContainer: {
        elevation: 20,
        marginHorizontal: 20,
        marginTop: 20,
        alignItems: 'center',
        height: 350,
    },
    backgroundImage: {
        height: '100%',
        width: '100%',
        borderRadius: 20,
        overflow: 'hidden',
    },
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    headerBtn: {
        height: 45,
        width: 45,
        elevation: 3,
        backgroundColor: COLORS.white,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    virtualTag: {
        top: -20,
        elevation: 5,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailsContainer: {
        flex: 1,
        paddingHorizontal: 20,
        marginTop: 40,
    },
    ratingTag: {
        height: 20,
        width: 25,
        backgroundColor: 'gray',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    priceStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 2,
        paddingHorizontal: 3,
        borderColor: 'gray',
    },
    facilityMainContainer: {
        marginTop: 10,
        flexDirection: 'row',
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderColor: "#dcdcdc",
        justifyContent: "space-between",
    },
    facilityContainer: {
        flexDirection: 'row',
    },

    facility: {
        flexDirection: 'row',
        marginRight: 15,
    },
    facilityText: {
        marginLeft: 5,
        color: COLORS.gray,
    },
    interiorImage: {
        width: width / 3 - 18,
        height: 130,
        marginRight: 10,
        borderRadius: 10,
    },
    footer: {
        height: 70,
        backgroundColor: "#EEEEEE",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopWidth:0.2,
        borderLeftWidth:0.2,
        borderRightWidth:0.2,
        borderColor:'#dcdcdc',
    },
    contactStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 5,
        backgroundColor: COLORS.blue,
        color: COLORS.white,
    },
    ownerImage: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    contactBtn: {
        height: 50,
        width: 50,
        borderRadius: 25,
        borderColor: "#dcdcdc",
        borderWidth: 0.3,
        backgroundColor: "#708090",
        alignItems: 'center',
        justifyContent: 'center',
    },
    whatsappBtn: {
        height: 50,
        width: 50,
        borderRadius: 25,
        borderColor: "#dcdcdc",
        borderWidth: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
    },
});

export default DetailsScreen;