import React from "react";
import CakeContainer from "./components/CakeContainer";
import HooksContainer from './components/HooksContainer'
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksContainer />
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
