import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from "react-native";

import { chinesefood } from '../Data'
import Products from '../components/Products'
import { connect } from 'react-redux'

class ChineseScreen extends Component {
    
    static navigationOptions = {
        headerTitle: 'Chinese Food'
    }
    render() {
        return (
            <ScrollView>
            <View style={styles.container}>
                <Products products={chinesefood} onPress={this.props.addItemToCart} />
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
export default connect(null, mapDispatchToProps)(ChineseScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});