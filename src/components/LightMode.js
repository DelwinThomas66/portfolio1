import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/counterSlice.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
// Import the action to toggle the theme

const ThemeToggle = ({ activeTheme }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };
  const iconStyle = {
    color: activeTheme !== "dark" ? "white" : "black",
    margin: "10px",
    fontSize: "22px", // Adjust the size as needed
  };
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", updateSize);
    updateSize(); // Trigger to set initial size
    return () => window.removeEventListener("resize", updateSize); // Cleanup on unmount
  }, []);
  return (
    <button
      onClick={handleToggle}
      style={{
        cursor: "pointer",
        position: "fixed",
        zIndex: 99,
        width: 60, // assuming the unit is pixels
        height: 50, // assuming the unit is pixels
        alignItems: "center",
        justifyContent: "center",
        color: "#000",
        backgroundColor:
          activeTheme === "dark"
            ? "rgba(0, 0, 0, 0.1)"
            : "hsla(0, 0%, 100%, .2)",
        top: "50%",
        right: 0,
        transform: "translateY(-50%)",
        borderRadius: "30px 0 0 30px",
        border: "none",
        display: size[0] < 1125 ? "none" : "flex",
      }}
    >
      {theme === "light" ? (
        <FontAwesomeIcon icon={faSun} style={iconStyle} />
      ) : (
        <FontAwesomeIcon icon={faMoon} style={iconStyle} />
      )}
    </button>
  );
};

export default ThemeToggle;
