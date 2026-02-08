// App.js
import React from "react";
import { useSelector } from "react-redux";

import ProfileDetails from "../components/ProfileDetails";
import About from "../components/About";
import Projects from "../components/Projects";

import styles from "./MenuScreen.module.scss";
const MenuScreen = () => {
  const activePage = useSelector((state) => state.menu.activePage);
  const theme = useSelector((state) => state.theme);

  return (
    <div className={styles.menuScreenContainer}>
      {activePage === "Home" && <ProfileDetails activeTheme={theme} />}
      {activePage === "About" && <About />}
      {activePage === "Projects" && <Projects />}
    </div>
  );
};

export default MenuScreen;
