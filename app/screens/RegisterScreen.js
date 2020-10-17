import React from 'react';
import { View, StyleSheet } from 'react-native';

function RegisterScreen(props) {
    return (
        <View style={styles.container}>
            <Text>This is the register screen</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
})

export default RegisterScreen;