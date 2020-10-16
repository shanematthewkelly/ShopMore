import React from 'react';
import { StyleSheet, View } from 'react-native';

function LoginScreen(props) {
    return (
        <View style={styles.container}>
            <Text>This is the login screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
})

export default LoginScreen;