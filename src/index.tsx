import React from "react";
import ReactDOM from "react-dom/client";
import "../src/assets/scss/base.scss";
import App from "./App";
import store from "./data/store";
import { Provider } from "react-redux";
import { ErrorBoundary } from "./components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>
);
