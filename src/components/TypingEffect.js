import { useState, useEffect } from "react";
import styles from "./TypingEffect.module.scss";
const Typewriter = ({ text, delay, infinite }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tempText, setTempText] = useState("Dreamer");
  const [showCursor, setShowCursor] = useState(true);
  useEffect(() => {
    let timeout;

    if (currentIndex <= tempText.length) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + tempText[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
    } else if (infinite) {
      if (tempText === "Dreamer") {
        setTempText("Developer");
      } else {
        setTempText("Dreamer");
      }
      setCurrentIndex(0);
      setCurrentText("");
    }
    const cursorInterval = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, 250);

    return () => {
      clearTimeout(timeout);
      clearInterval(cursorInterval);
    };
  }, [currentIndex, delay, infinite, text, tempText]);

  return (
    <span className={styles.typeWriter}>
      {currentText}
      {showCursor &&currentIndex>1&& "|"}
    </span>
  );
};

export default Typewriter;
