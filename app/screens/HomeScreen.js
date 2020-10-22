import React from 'react';
import { View, StyleSheet, Text, Image, Modal, TouchableOpacity } from 'react-native';
import { useFonts, Montserrat_700Bold, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { AppLoading } from 'expo';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { prodImage1, prodImage2, prodImage3, gucciCap, louisVuitton, monclerGillet } from '../global/prodImage'
import Svg, { Polygon } from 'react-native-svg';


function HomeScreen(props) {

    //Modal for products
    const [showModal, setShowModal] = React.useState(false)
    const [productClicked, setProductClicked] = React.useState(null)

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
            name: "Snake-Print Cap",
            description: "This is a random description, it must be changed for the user to understand",
            image: gucciCap,
            background: "#3b3b3b",
            category: "Gucci",
            price: "€250"
        },
        {
            id: 1,
            name: "LV Handbag",
            description: "This is a random description, it must be changed for the user to understand",
            image: louisVuitton,
            background: "#D2B48C",
            category: "Louis Vuitton",
            price: "€1299"
        },
        {
            id: 2,
            name: "Moncler Gillet",
            description: "This is a random description, it must be changed for the user to understand",
            image: monclerGillet,
            background: "#089930",
            category: "Moncler",
            price: "€625"
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
            <TouchableOpacity onPress={() => {
                setProductClicked(item)
                setShowModal(true)
            }}
                style={{
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
            <View
                style={{ alignItems: 'center' }}>
                <TouchableOpacity style={styles.card}
                    onPress={() => {
                        setProductClicked(item)
                        setShowModal(true)
                    }}>
                    <View style={styles.imageWrapper}>
                        <Image
                            source={item.image}
                            style={styles.cardImage}
                            resizeMode="contain" />
                    </View>
                    <View style={styles.cardTextWrapper}>
                        <Text style={styles.cardTitle}>{item.name}</Text>
                        <Text style={styles.cardDesc}>{item.description}</Text>
                        <Text style={styles.cardPrice}>{item.price}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <ScrollView style={styles.container}>
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
            <View>
                <Text style={styles.bestSelling}>BEST-SELLING</Text>
            </View>

            <View style={{
                backgroundColor: 'white',
                flex: 1,
                flexDirection: 'row',
                marginTop: 30,
                borderTopRightRadius: 30,
                borderTopLeftRadius: 30,
            }}>

                <View style={styles.moreProducts}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={moreproducts}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item, index }) => moreProducts(item, index)} />
                </View>
            </View>

            {/* Popup */}

            {productClicked &&
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showModal}
                >

                    <View style={styles.blurred}>

                        {/* Popup Close */}
                        <TouchableOpacity style={styles.popupClose}
                            onPress={() => {
                                setProductClicked(null)
                                setShowModal(false)
                            }}>
                        </TouchableOpacity>

                        {/* Modal Details */}
                        <View style={{
                            justifyContent: 'center',
                            width: '85%',
                            backgroundColor: productClicked.background
                        }}>
                            <View style={styles.imageContainerModal}>
                                <Image
                                    source={productClicked.image}
                                    resizeMode="contain"
                                    style={{
                                        width: '100%',
                                        height: 260
                                    }} />
                            </View>
                            <Text style={styles.modalName}>{productClicked.name}</Text>
                            <Text style={styles.modalCategory}>{productClicked.category}</Text>
                            <Text style={styles.modalPrice}>{productClicked.price}</Text>

                            <TouchableOpacity style={styles.modalBuyButton}
                                onPress={() => {
                                    setProductClicked(null)
                                    setShowModal(false)
                                    alert("Product Added To Cart")
                                }}>
                                <Text style={styles.addToCart}>Add To Cart</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </Modal>
            }
        </ScrollView>


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
    bestSelling: {
        marginTop: 50,
        fontSize: 20,
        paddingLeft: 33,
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
        elevation: 10
    },
    shape: {
        position: 'absolute',
        top: 32,
        right: 0,
        width: '100%',
        height: '100%',
        elevation: 10
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
    blurred: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    popupClose: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    modalName: {
        color: '#fff',
        paddingTop: 12,
        paddingLeft: 30,
        paddingRight: 30,
        fontSize: 25,
        fontFamily: "Montserrat_700Bold",

    },
    modalCategory: {
        color: '#fff',
        paddingLeft: 32,
        paddingRight: 30,
        fontSize: 12,
        textTransform: 'uppercase'
    },
    modalPrice: {
        color: '#fff',
        paddingTop: 12,
        paddingLeft: 35,
        paddingRight: 30,
        fontSize: 23,
        fontFamily: "Montserrat_400Regular",
    },
    modalBuyButton: {
        width: '100%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    addToCart: {
        color: '#fff',
        fontFamily: "Montserrat_400Regular",
        fontSize: 18,
        textTransform: 'uppercase'
    },
    imageContainerModal: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -120
    },
    card: {
        marginBottom: 15,
        backgroundColor: '#fff',
        paddingVertical: 18,
        paddingHorizontal: 5,
        width: '92%',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.70,
        elevation: 3,
        flexDirection: 'row',
    },
    cardTitle: {
        fontFamily: "Montserrat_400Regular",
        fontSize: 20,
    },
    cardDesc: {
        fontSize: 15,
        color: '#b0b0b0'
    },
    cardPrice: {
        marginTop: 12,
        fontSize: 18,
        fontFamily: "Montserrat_400Regular",
    },
    imageWrapper: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardImage: {
        width: 120,
        height: 150
    },
    cardTextWrapper: {
        marginHorizontal: 12,
        overflow: 'hidden',
        flex: 1.5
    },
    closeButton: {
        width: 300,
        height: 65,
        backgroundColor: '#d12e64',
        borderRadius: 80,
        justifyContent: 'center',
        zIndex: 80
    },
    closeText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    }

})

export default HomeScreen;