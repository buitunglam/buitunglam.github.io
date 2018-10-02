import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import createStore from 'redux';

const defaultState = {value:0};

const reducer = (state= defaultState, action) => {
    if (action.type === 'UP') return {value: state.value + 1};
    if (action.type === 'DOWN') return {value: state.value - 1};
};

export default class DemoRedux extends Component {
    render() {
        return <App/>;
    }
}

AppRegistry.registerComponent('DemoRedux', () => DemoRedux);