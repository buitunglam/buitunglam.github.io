import React , {Component} from 'react';
import { Provider } from 'react-redux'
import Main from './src/Components/Main';
import store from './src/Redux/Store';

export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Main/>
        </Provider>
    );
  }
}


