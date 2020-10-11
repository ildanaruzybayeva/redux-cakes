import React from "react";
import CakeContainer from "./components/CakeContainer";
import HooksContainer from "./components/HooksContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksTodo from "./components/HooksTodo";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksContainer />
        <HooksTodo />
      </div>
    </Provider>
  );
}

export default App;
