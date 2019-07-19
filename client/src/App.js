import React from 'react';
// components
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
// redux 
import {Provider} from 'react-redux';
import store from './store';
//reactstrap/css
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar/>
        <ShoppingList/>
      </div>
    </Provider>
  );
}

export default App;
