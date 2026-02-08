import React from "react";
import styles from "./ProfileDetails.module.scss";
import Typewriter from "./TypingEffect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const ProfileDetails = ({ activeTheme }) => {
  const iconStyle = {
    color: activeTheme !== "dark" ? "white" : "black",
    margin: "10px",
    fontSize: "22px", // Adjust the size as needed
  };

  return (
    <div className={styles.profileDetails}>
      <div className={styles.outerContainer}>
      <div className={styles.profilePictureContainer}>
        <div className={styles.profilePicture}></div>
      </div>

      {/* Add your portfolio details here */}
      <div className={styles.portfolioDetails}>
        <h1>DELWIN THOMAS</h1>
        <div className={styles.typeWriterDiv}>
          <Typewriter text='Dreamer' delay={250} infinite />
        </div>

        <p>
          Bengaluru-Based Web Alchemist: Transforming Ideas into Globally
          Celebrated Applications, One Innovation at a Time!
        </p>
        <div>
          <a
            href='https://www.linkedin.com/in/delwin-thomas-934789215/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faLinkedinIn} style={iconStyle} />
          </a>
          <a
            href='https://www.instagram.com/chanandler_bong66/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faInstagram} style={iconStyle} />
          </a>
          {/* Add more icons as needed */}
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
