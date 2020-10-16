import React from 'react';
import LottieView from 'lottie-react-native';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function LoginScreen(props) {

    return (
        <ImageBackground
            style={styles.imageBackground}
            source={require("../assets/login.jpg")}>

            <View style={styles.logoContainer}>
                <LottieView style={styles.lottieAnim}
                    source={require("../assets/shopping.json")} autoPlay loop />
            </View>

            <View style={styles.loginBtn}>
                <Text style={styles.buttonTexts}>LOGIN</Text>
            </View>

            <View style={styles.registerBtn}>
                <Text style={styles.buttonTexts}>REGISTER</Text>
            </View>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    lottieAnim: {
        width: 200,
        height: 200,
        zIndex: 50,
        top: 30
    },
    loginBtn: {
        width: '90%',
        height: 65,
        backgroundColor: '#1e33fc',
        borderRadius: 80,
        bottom: 40,
        justifyContent: 'center'
    },
    registerBtn: {
        width: '90%',
        height: 65,
        backgroundColor: '#d12e64',
        borderRadius: 80,
        bottom: 30,
        justifyContent: 'center',

    },
    buttonTexts: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
})

export default LoginScreen;