import {AppRegistry} from 'react-native';
import App from './App';
import React from "react";

export default class DemoRedux extends Component {
        render(){
            return <App />;
        }
    };

AppRegistry.registerComponent('DemoRedux', () => DemoRedux);