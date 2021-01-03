import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container} style={{ paddingTop: 200}}>

                <Button color="rgba(51, 102, 255,1)" title="Arabian Food" onPress={() => this.props.navigation.navigate('Arabian')} />
                
                <Button color="rgba(51, 102, 255,1)" title="Chinese Food" onPress={() => this.props.navigation.navigate('Chinese')} />
            </View>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#7f7f7f',
        justifyContent: 'center'
    }
});