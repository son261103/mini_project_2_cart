import React from 'react';
import './App.css';
import Title from "./components/Title";
import ListProduct from "./components/ListProduct";
import Cart from "./components/Cart";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducers } from './reducers';

const store = createStore(reducers);

function App() {
    return (
        <Provider store={store}>
            <div className="container">
                <Title />
                <div className="row">
                    <ListProduct />
                    <Cart />
                </div>
            </div>
        </Provider>
    );
}

export default App;