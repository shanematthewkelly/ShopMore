import React from 'react';
import { View, StyleSheet, TouchableHighlight, Animated } from 'react-native';
import { FontAwesome5, Feather } from '@expo/vector-icons'

function MenuButton(props) {

    mybutton = new Animated.Value(1)
    movement = new Animated.Value(0)

    handlePress = () => {
        Animated.sequence([
            Animated.timing(this.mybutton, {
                useNativeDriver: false,
                toValue: 0.95,
                duration: 200
            }),
            Animated.timing(this.mybutton, {
                useNativeDriver: false,
                toValue: 1
            }),
            Animated.timing(this.movement, {
                useNativeDriver: false,
                toValue: this.movement._value === 0 ? 1 : 0
            })
        ]).start();
    }

    const AnimatedButtonStyle = {
        transform: [{ scale: this.mybutton }]
    }

    const rotateAnim = this.movement.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "45deg"]
    });

    const temperatureX = this.movement.interpolate({
        inputRange: [0, 1],
        outputRange: [-24, -100]
    });

    const temperatureY = this.movement.interpolate({
        inputRange: [0, 1],
        outputRange: [-50, -100]
    });

    const watchX = this.movement.interpolate({
        inputRange: [0, 1],
        outputRange: [-24, -24]
    });

    const watchY = this.movement.interpolate({
        inputRange: [0, 1],
        outputRange: [-50, -150]
    });

    const healthX = this.movement.interpolate({
        inputRange: [0, 1],
        outputRange: [-24, 50]
    });

    const healthY = this.movement.interpolate({
        inputRange: [0, 1],
        outputRange: [-50, -100]
    })

    return (
        <View style={styles.menuBtnContainer}>
            <Animated.View style={{
                position: 'absolute',
                left: temperatureX,
                top: temperatureY
            }}>
                <View style={styles.optionBtn}>
                    <Feather name="thermometer" size={24} color="#fff" />
                </View>
            </Animated.View>

            <Animated.View style={{
                position: 'absolute',
                left: watchX,
                top: watchY
            }}>
                <View style={styles.optionBtn}>
                    <Feather name="clock" size={24} color="#fff" />
                </View>
            </Animated.View>

            <Animated.View style={{
                position: 'absolute',
                left: healthX,
                top: healthY
            }}>
                <View style={styles.optionBtn}>
                    <Feather name="activity" size={24} color="#fff" />
                </View>
            </Animated.View>

            <Animated.View style={[styles.menuBtn, AnimatedButtonStyle]}>
                <TouchableHighlight onPress={this.handlePress} underlayColor="#7F58FF">
                    <Animated.View style={{ transform: [{ rotate: rotateAnim }] }}>
                        <FontAwesome5 name="plus" size={24} color="#fff" />
                    </Animated.View>
                </TouchableHighlight>
            </Animated.View>
        </View >
    );
}

const styles = StyleSheet.create({
    menuBtnContainer: {
        position: 'absolute',
        alignItems: 'center'
    },
    menuBtn: {
        backgroundColor: '#1e33fc',
        alignItems: 'center',
        justifyContent: 'center',
        width: 72,
        height: 72,
        borderRadius: 36,
        position: 'absolute',
        top: -60,
        shadowColor: '#1e33fc',
        shadowRadius: 5,
        shadowOffset: { height: 10 },
        shadowOpacity: 0.3,
        borderWidth: 3,
        borderColor: '#fff'
    },
    optionBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#1e33fc'

    }
})

export default MenuButton;