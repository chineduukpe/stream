import React, { Component } from 'react';
import './styles/App.css';

/*REDUX CONNECTION*/
import { createStore } from 'redux';
import { Provider } from 'react-redux';

/*REDUCER IMPORTS*/
import allReducers from './reducers';
import Hello from './containers/hello-container';

/*OTHER COMPONENTS*/
import Navigation from './components/navigation';


const initial_state = [];

const store = createStore(allReducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
            <Navigation/>
            <hr/>
            <Hello/>
        </div>
      </Provider>
    );
  }
}

export default App;
