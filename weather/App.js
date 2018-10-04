import React from 'react';
import { StyleSheet } from 'react-native';
import Main from './src/Components/Main';
import {Provider} from 'react-redux';
import store from './src/Redux/Store';

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <Main/>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
