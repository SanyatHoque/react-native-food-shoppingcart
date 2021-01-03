import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    SafeAreaView
} from "react-native";
import Products from '../components/Products'
import { arabianfood } from '../Data'
import { connect } from 'react-redux'

class ElectronicsScreen extends Component {

    static navigationOptions = {
        headerTitle: 'Arabian Food'
    }
    render() {
        return (
            <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Products products={arabianfood} onPress={this.props.addItemToCart} />
            </View>
            </ScrollView>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product })
    }
}

export default connect(null, mapDispatchToProps)(ElectronicsScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollView: {
        marginHorizontal: 0,
      },
});