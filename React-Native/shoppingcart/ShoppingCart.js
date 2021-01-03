import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { createStackNavigator } from 'react-navigation'
import HomeScreen from './containers/HomeScreen'
import ArabianScreen from './containers/ArabianScreen'
import ChineseScreen from './containers/ChineseScreen'
import ShoppingCartIcon from './containers/ShoppingCartIcon'
import CartScreen from './containers/CartScreen'
class ShoppingCart extends Component {
    render() {
        return (
            <AppStackNavigator />
        );
    }
}
export default ShoppingCart;

const AppStackNavigator = createStackNavigator({
    Home: HomeScreen,
    Arabian: ArabianScreen,
    Chinese: ChineseScreen ,
    Cart: CartScreen
}, {
        navigationOptions: {
            headerTitle: 'Food Delivery App',
            headerTitleStyle: { color: 'blue',fontSize: 28},
            headerRight: (
                <ShoppingCartIcon />
            )
        }
    })

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});