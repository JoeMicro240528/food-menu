import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import { store } from './rtk/store';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
);

