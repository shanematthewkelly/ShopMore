import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { useFonts, Montserrat_700Bold, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { AppLoading } from 'expo';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { prodImage1, prodImage2, prodImage3 } from '../global/prodImage'
import Svg, { Polygon } from 'react-native-svg';



function HomeScreen(props) {

    //Dummy Data
    const [featured, setFeatured] = React.useState([
        {
            id: 0,
            name: "Parka Jacket",
            image: prodImage1,
            background: "#c20902",
            category: "Canada Goose",
            price: "€625"
        },
        {
            id: 1,
            name: "Crewneck",
            image: prodImage2,
            background: "#ed6e13",
            category: "Stone Island",
            price: "€255"
        },
        {
            id: 2,
            name: "Polo",
            image: prodImage3,
            background: "#0f44b8",
            category: "Moncler",
            price: "€125"
        }
    ])

    //Loading fonts
    let [fontsLoaded, error] = useFonts({
        Montserrat_700Bold,
        Montserrat_400Regular
    });

    if (!fontsLoaded) {
        return <AppLoading />
    }

    //Render featured items
    function renderFeatured(item, index) {

        var featuredStyling = {};

        //If the index is set to 0, move the card over
        if (index == 0) {
            featuredStyling = { marginLeft: 15 }
        }

        return (
            <TouchableOpacity style={{
                paddingBottom: 22,
                height: 262,
                width: 184,
                paddingLeft: 12,
                justifyContent: 'center',
                marginHorizontal: 10,
                ...featuredStyling
            }}>
                <Text style={styles.flatlistTitle}>{item.category}</Text>

                <View style={[{
                    flex: 1,
                    justifyContent: 'flex-end',
                    marginTop: 20,
                    marginRight: 20,
                    borderRadius: 15,
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingBottom: 7,
                    backgroundColor: item.background,

                }, styles.cardShadow]}>

                    <View style={styles.cardInfo}>
                        <Text style={styles.featuredName}>{item.name}</Text>
                        <Text style={styles.featuredPrice}>{item.price}</Text>
                    </View>
                </View>

                <View style={styles.shape}>
                    <Svg height="100%" width="100%">
                        <Polygon
                            points="0,0 160, 0 160, 80"
                            fill="white" />
                    </Svg>
                </View>

                <Image
                    source={item.image}
                    resizeMode="cover"
                    style={styles.featuredImage}
                />


            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.products}>PRODUCTS</Text>
            <Text style={styles.featured}>FEATURED</Text>

            <View style={styles.flatlist}>

                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={featured}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => renderFeatured(item, index)}
                />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    products: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 35,
        color: '#e3e3e3',
        padding: 14,
        fontFamily: "Montserrat_700Bold",
    },
    featured: {
        marginTop: 50,
        fontSize: 20,
        padding: 14,
        paddingLeft: 23,
        fontFamily: "Montserrat_700Bold",
    },
    flatlist: {
        height: 270,
        marginTop: 20,
    },
    flatlistTitle: {
        color: '#595959',
        fontSize: 14,
        fontFamily: "Montserrat_400Regular"
    },
    cardInfo: {
        height: '35%',
        justifyContent: "space-around"
    },
    featuredName: {
        color: 'white',

    },
    featuredPrice: {
        color: 'white',
        fontSize: 20,
        fontFamily: "Montserrat_400Regular"
    },
    featuredImage: {
        position: 'absolute',
        top: 20,
        right: 35,
        width: "58%",
        height: "55%",
        elevation: 22
    },
    shape: {
        position: 'absolute',
        top: 32,
        right: 0,
        width: '100%',
        height: '100%',
        elevation: 20
    },
    cardShadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.70,
        elevation: 10
    }

})

export default HomeScreen;