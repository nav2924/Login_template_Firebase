// index.js or App.js
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store.js"; // assuming you have your Redux store configured

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container); // create a root

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
