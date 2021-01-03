import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ShoppingCart from './ShoppingCart'
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
    return (
      <Provider store={store}>
        <ShoppingCart />
      </Provider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7f7f7f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;