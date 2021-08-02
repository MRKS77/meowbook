import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/reduxStore";
import Mom from "./Mom";

const App = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Mom />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
