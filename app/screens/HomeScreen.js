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
    ]);

    const [moreproducts, setMoreProducts] = React.useState([
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
    ]);

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

    //Render More Products
    function moreProducts(item, index) {
        return (
            <TouchableOpacity
                onPress={() => {
                    console.log("moreProducts")
                }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    marginBottom: 10,
                    padding: 12,
                }}>
                    <View style={styles.moreProdCard}>
                        <Image
                            source={item.image}
                            resizeMode="contain"
                            style={styles.moreProdImage} />
                    </View>
                    <View style={styles.moreProdInfo}>
                        <Text style={styles.moreProdName}>
                            {item.name}
                        </Text>
                        <Text style={styles.moreProdPrice}>
                            {item.price}
                        </Text>
                    </View>
                </View>
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

            {/* More Products */}
            <View style={[{
                backgroundColor: 'white',
                flex: 1,
                flexDirection: 'row',
                marginTop: 30,
                borderTopRightRadius: 30,
                borderTopLeftRadius: 30,
            }, styles.moreProdShadow]}>

                <View
                    styles={{
                        width: 70,
                        padding: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>

                    <Image
                        source={require('../assets/images/products.png')}
                        resizeMode="cover"
                        style={{ flex: 1, width: 80, backgroundColor: '#fff' }}></Image>

                </View>

                <View style={styles.moreProducts}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={moreproducts}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item, index }) => moreProducts(item, index)}
                    />

                </View>

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
        marginTop: 40,
        fontSize: 35,
        color: '#e3e3e3',
        padding: 14,
        fontFamily: "Montserrat_700Bold",
    },
    featured: {
        marginTop: 30,
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
    },
    moreProducts: {
        flex: 1,
    },
    productrow: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10,
        padding: 12,
    },
    moreProdCard: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    moreProdImage: {
        width: 100,
        height: 100
    },
    moreProdInfo: {
        flex: 1.5,
        marginLeft: 15,
        justifyContent: 'center',

    },
    moreProdName: {
        color: '#c4c4c4',
        fontSize: 16
    },
    moreProdPrice: {
        color: '#000',
        fontFamily: "Montserrat_400Regular",
        fontSize: 18
    },
    moreProdShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 15
    }

})

export default HomeScreen;