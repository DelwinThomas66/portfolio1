import React from "react";
import styles from "./App.module.scss";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import MainScreen from "./screen/MainScreens.js";
const App = () => {
  return (
    <Provider store={store}>
      <div className={styles["app-container"]}>
        <MainScreen></MainScreen>
      </div>
    </Provider>
  );
};
export default App;