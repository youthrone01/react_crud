import React from "react";
import ReactDOM from "react-dom";
// import "normalize.css/normalize.css";
// import "./style/style.scss";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import { Provider} from 'react-redux';
import configureStore from './stores/configureStore';



const store = configureStore();


ReactDOM.render(
    <Provider store={store}>
    <AppRouter />
    </Provider>,
     document.getElementById('app'));

 
