import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { FontAwesome5 } from '@expo/vector-icons'

import { TestScreen1, TestScreen2, TestScreen3, TestScreen4 } from './MenuItems'
import MenuButton from './MenuButton'

const BottomNavigation = createBottomTabNavigator({

    MenuItem1: {
        screen: TestScreen1,
        navigationOptions: {
            tabBarIcon: () => <FontAwesome5 name="book-medical" size={24} color="#CDCCCE" />
        }
    },
    MenuItem2: {
        screen: TestScreen2,
        navigationOptions: {
            tabBarIcon: () => <FontAwesome5 name="heartbeat" size={24} color="#CDCCCE" />
        }
    },
    Button: {
        screen: () => null,
        navigationOptions: {
            tabBarIcon: <MenuButton />
        }
    },
    MenuItem3: {
        screen: TestScreen3,
        navigationOptions: {
            tabBarIcon: () => <FontAwesome5 name="band-aid" size={24} color="#CDCCCE" />
        }
    },
    MenuItem4: {
        screen: TestScreen4,
        navigationOptions: {
            tabBarIcon: () => <FontAwesome5 name="user" size={24} color="#CDCCCE" />
        }
    }
},
    {
        tabBarOptions: {
            showLabel: false
        }
    }
);

export default createAppContainer(BottomNavigation);