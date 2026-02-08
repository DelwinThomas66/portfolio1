// src/components/SideMenu.js
import React, { useEffect, useState } from "react";
import styles from "./SideMenu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faSheetPlastic,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setActivePage, toggleTheme } from "../redux/counterSlice";

const SideMenu = () => {
  const [selectedItem, setSelectedItem] = useState("Home");
  const dispatch = useDispatch();
  const [size, setSize] = useState([0, 0]);

  useEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", updateSize);
    updateSize(); // Trigger to set initial size
    return () => window.removeEventListener("resize", updateSize); // Cleanup on unmount
  }, []);
  const handleItemClick = (item) => {
    setSelectedItem(item);
    dispatch(setActivePage(item));
  };

  const handleToggle = () => {
    dispatch(toggleTheme());
  };
  const theme = useSelector((state) => state.theme);
  return (
    <div className={styles.sideMenu} id='side'>
      {/* Add your menu items with icons here */}
      <ul>
        <li
          className={selectedItem === "Home" ? styles.active : ""}
          onClick={() => handleItemClick("Home")}
        >
          <FontAwesomeIcon
            icon={faHome}
            size={size[0] < 1124 ? "md" : "sm"}
            style={{ marginRight: "8px",
           }}
          />{" "}
          <span>Home</span>
        </li>
        <li
          className={selectedItem === "About" ? styles.active : ""}
          onClick={() => handleItemClick("About")}
        >
          <FontAwesomeIcon
            icon={faInfoCircle}
            size={size[0] < 1124 ? "md" : "sm"}
            style={{ marginRight: "8px" }}
          />{" "}
          <span> About</span>
        </li>
        <li
          className={selectedItem === "Projects" ? styles.active : ""}
          onClick={() => handleItemClick("Projects")}
        >
          <FontAwesomeIcon
            icon={faSheetPlastic}
            size={size[0] < 1124 ? "md" : "sm"}
            style={{ marginRight: "8px" }}
          />{" "}
          <span> Projects</span>
        </li>
        {size[0] < 1124 && (
          <li
            className={selectedItem === "theme" ? styles.active : ""}
            onClick={handleToggle}
          >
            {theme === "light" ? (
              <FontAwesomeIcon
                icon={faSun}
                size={size[0] < 1124 ? "md" : "sm"}
                style={{ marginRight: "8px" }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faMoon}
                size={size[0] < 1124 ? "md" : "sm"}
                style={{ marginRight: "8px" }}
              />
            )}
          </li>
        )}
      </ul>
    </div>
  );
};

export default SideMenu;
