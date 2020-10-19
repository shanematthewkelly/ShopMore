import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { useFonts, Montserrat_700Bold, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { AppLoading } from 'expo';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { prodImage1, prodImage2, prodImage3 } from '../global/prodImage'



function HomeScreen(props) {

    //Dummy Data
    const [featured, setFeatured] = React.useState([
        {
            id: 0,
            name: "Red T-shirt",
            image: prodImage1,
            background: "#c20902",
            category: "Canada Goose",
            price: "€625"
        },
        {
            id: 1,
            name: "Test Product #2",
            image: prodImage2,
            background: "#ed6e13",
            category: "Stone Island",
            price: "€255"
        },
        {
            id: 2,
            name: "Test Product #3",
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
                height: 240,
                width: 180,
                justifyContent: 'center',
                marginHorizontal: 10,
                ...featuredStyling
            }}>
                <Text style={styles.flatlistTitle}>{item.category}</Text>

                <View style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    marginTop: 20,
                    marginRight: 20,
                    borderRadius: 15,
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingBottom: 7,
                    backgroundColor: item.background,
                }}>

                    <View style={styles.cardInfo}>
                        <Text style={styles.featuredName}>{item.name}</Text>
                        <Text style={styles.featuredPrice}>{item.price}</Text>
                    </View>
                </View>

                <View style={styles.shape}>

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
    featured: {
        marginTop: 50,
        fontSize: 20,
        padding: 14,
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
        fontSize: 20
    },
    featuredImage: {
        position: 'absolute',
        top: 20,
        right: 0,
        width: "58%",
        height: "55%",
    },
    shape: {
        position: 'absolute',
        top: 27,
        right: 0,
        width: '95%',
        height: '100%'
    }

})

export default HomeScreen;