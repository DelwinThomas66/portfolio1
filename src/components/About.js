// pages/portfolio.js

import React from "react";
import styles from "./About.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + "/Delwin_Thomas_2026.pdf";
    link.download = "Delwin_Thomas_2026.pdf";
    link.click();
  };
  function calculateAge(dobString) {
    // Parse the input string to extract day, month, and year
    var dobArray = dobString.split("/");
    var day = parseInt(dobArray[0], 10);
    var month = parseInt(dobArray[1], 10) - 1; // Month is zero-based in JavaScript
    var year = parseInt(dobArray[2], 10);

    // Create a Date object using the parsed values
    var dob = new Date(year, month, day);

    // Get the current date
    var currentDate = new Date();

    // Calculate the difference in milliseconds
    var timeDiff = currentDate - dob;

    // Calculate the age based on the time difference
    var age = Math.floor(timeDiff / (365.25 * 24 * 60 * 60 * 1000));

    return age;
  }

  const Skill = ({ skillName, percentage }) => {
    return (
      <div className={styles.skill}>
        <div className={styles.nameNcent}>
          {" "}
          <span className={styles.skillName}>{skillName}</span>{" "}
          <span className={styles.progressText}>{percentage}%</span>
        </div>

        <div className={styles.progressBarContainer}>
          <div
            className={styles.progressBar}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.portfolioContainerAbout}>
      <div className={styles.about}>About Me</div>

      <div className={styles.profileSection}>
        <h1 className={styles.profileName}>Delwin Thomas</h1>
        {/* Add a subtle separator */}

        <p className={styles.profileDescription}>
          Hello! I'm Delwin Thomas, a results-driven web developer specializing
          in React, Next.js, and JavaScript. With a strong command of Recoil and
          Redux for efficient state management,I bring proficiency in Angular
          and experience in crafting robust web applications. My skills extend
          to utilizing testing libraries such as Jest to ensure code quality.
        </p>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.aboutSection}>
        <div className={styles.column}>
          <div className={styles.detail}>
            <span className={styles.detailQuestion}>Birthday</span>
            <span className={styles.detailAnswer}>29/04/1998</span>
          </div>
          <div className={styles.detail}>
            <span className={styles.detailQuestion}>Age</span>
            <span className={styles.detailAnswer}>
              {calculateAge("29/04/1998")}
            </span>
          </div>
          <div className={styles.detail}>
            <span className={styles.detailQuestion}>Email</span>
            <span className={styles.detailAnswer}>delwintom@gmail.com</span>
          </div>
          <div className={styles.detail}>
            <span className={styles.detailQuestion}>Phone</span>
            <span className={styles.detailAnswer}>9526776443</span>
          </div>
          {/* Add more details in the same format */}
        </div>
        <div className={styles.column}>
          <div className={styles.detail}>
            <span className={styles.detailQuestion}>Nationality</span>
            <span className={styles.detailAnswer}>Indian</span>
          </div>

          <div className={styles.detail}>
            <span className={styles.detailQuestion}>University</span>
            <span className={styles.detailAnswer}>
              Christ university Bengaluru
            </span>
          </div>
          <div className={styles.detail}>
            <span className={styles.detailQuestion}>Study</span>
            <span className={styles.detailAnswer}>MCA</span>
          </div>
          <div className={styles.detail}>
            <span className={styles.detailQuestion}>Freelance</span>
            <span className={styles.detailAnswer}>Available</span>
          </div>
          {/* Add more details in the same format */}
        </div>
      </div>

      <div className={styles.separator}></div>

      <div>
        <button onClick={downloadCV} className={styles.downloadButton}>
          Download CV
        </button>
      </div>
      <div className={styles.skillsSection}>
        <h2 className={styles.skillsHeader}>Skills</h2>
        <div className={styles.skillsSectionInner}>
          <div className={styles.sepColumn}>
            <Skill skillName='React JS' percentage={90} />
            <Skill skillName='Next JS' percentage={90} />
            <Skill skillName='Redux' percentage={90} />
            <Skill skillName='JavScript' percentage={85} />
          </div>
          <div className={styles.sepColumn}>
            <Skill skillName='Recoil' percentage={90} />
            <Skill skillName='Jest' percentage={75} />
            <Skill skillName='Angular JS' percentage={70} />
            <Skill skillName='Prime React' percentage={70} />
          </div>
        </div>
        {/* Add more skills with progress bars */}
      </div>
      <div className={styles.separator}></div>
      <div className={styles.KnowledgeSection}>
        <h2 className={styles.skillsHeader}>Knowledge</h2>
        <div className={styles.listSeperator}>
          <ul>
            <li>
              <FontAwesomeIcon icon={faPlay} className={styles.icon} />
              React JS
            </li>
            <li>
              <FontAwesomeIcon icon={faPlay} className={styles.icon} />
              Next JS
            </li>
            <li>
              <FontAwesomeIcon icon={faPlay} className={styles.icon} />
              JavaScript
            </li>
            <li>
              <FontAwesomeIcon icon={faPlay} className={styles.icon} />
              Redux
            </li>
            <li>
              <FontAwesomeIcon icon={faPlay} className={styles.icon} />
              Recoil
            </li>
            <li>
              <FontAwesomeIcon icon={faPlay} className={styles.icon} />
              Prime-React
            </li>
            <li>
              <FontAwesomeIcon icon={faPlay} className={styles.icon} />
              Angular
            </li>
          </ul>
          <ul>
            <li>
              <FontAwesomeIcon icon={faPlay} className={styles.icon} />
              HTML, CSS, SASS
            </li>
            <li>
              <FontAwesomeIcon icon={faPlay} className={styles.icon} />
              RESTful APIs and JSON
            </li>
            <li>
              <FontAwesomeIcon icon={faPlay} className={styles.icon} />
              Jest
            </li>
            <li>
              <FontAwesomeIcon icon={faPlay} className={styles.icon} />
              Jasmine
            </li>
            <li>
              <FontAwesomeIcon icon={faPlay} className={styles.icon} />
              Node.js
            </li>
            <li>
              <FontAwesomeIcon icon={faPlay} className={styles.icon} />
              Agile/Scrum Methodology
            </li>
            <li>
              <FontAwesomeIcon icon={faPlay} className={styles.icon} />
              Problem-solving and analytical thinking
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
