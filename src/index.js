import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import { addArticle } from "./actions/index";
import App from "./components/App";

import "./styles.css";

// Following this tutorial on dev.to
// React Redux Tutorial for Beginners, learning Redux in 2018
// https://dev.to/valentinogagliardi/react-redux-tutorial-for-beginners-learning-redux-in-2018-13hj

// console.log(`begin store.getState()`, store.getState());
// store.subscribe(() => console.log("subscribed!"));
// store.dispatch(addArticle({ name: "redux book", id: 1 }));
// console.log(`end store.getState()`, store.getState());

window.store = store;
window.addArticle = addArticle;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
