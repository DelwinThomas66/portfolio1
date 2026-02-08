// Projects.jsx

import React, { useEffect, useState } from "react";
import styles from "./Projects.module.scss"; // Replace with the actual path to your CSS module
import Card from "./Card";

const Projects = () => {
  // Projects data based on work experience and freelance projects
  const projectsData = [
    // JODO Projects
    {
      itemCount: 1,
      heading: "CRM to Dashboard Migration",
      description:
        "Led migration of legacy internal CRM to modern dashboard-driven interface, reducing navigation time by 35%.",
      title: "CRM to Dashboard Migration - JODO",
      date: "Dec 2024 – Present",
      content:
        "Led the migration of a legacy internal CRM to a modern, dashboard-driven interface. Redesigned UX workflows in collaboration with product and operations teams. Delivered within 2 months, reducing average navigation time by 35% and improving task efficiency for internal users. This project involved modernizing the entire user experience while maintaining data integrity and ensuring seamless transition for all stakeholders.",
      imageUrl: "jodoCrmMigration-thumb-bw.svg",
    },
    {
      itemCount: 2,
      heading: "User Onboarding Optimization",
      description:
        "Designed consumer-facing flow to auto pre-fill bank details, improving data capture rate by 28% and reducing abandonment by 22%.",
      title: "User Onboarding & Data Pre-Fill Optimization - JODO",
      date: "Dec 2024 – Present",
      content:
        "Designed and implemented a consumer-facing flow to automatically pre-fill user bank details using phone-number-based lookup. Reduced manual data entry and validation errors during onboarding and payment setup through guided UX and real-time validations. Improved successful data capture rate by 28% and reduced onboarding abandonment by 22%, directly improving user conversion and user trust. The solution significantly enhanced the user experience by minimizing friction in the critical onboarding process.",
      imageUrl: "jodoOnboarding-thumb-bw.svg",
    },
    {
      itemCount: 3,
      heading: "All-Settings Consolidation",
      description:
        "Built searchable settings hub consolidating fragmented configuration pages, reducing time to locate settings by 40%.",
      title: "All-Settings Consolidation - JODO",
      date: "Dec 2024 – Present",
      content:
        "Built the All-Settings feature, consolidating fragmented configuration pages into a single searchable settings hub. Applied memoization, selective rendering, and efficient state slicing to maintain performance with large settings datasets. Reduced time spent locating settings by 40% and lowered dependency on engineering support for configuration changes. This feature greatly improved user autonomy and system usability.",
      imageUrl: "jodoSettings-thumb-bw.svg",
    },
    {
      itemCount: 4,
      heading: "Jodo-UI Component Library",
      description:
        "Developed internal UI library using Vite and Storybook, standardizing design and accelerating feature development across teams.",
      title: "Jodo-UI Component Library - JODO",
      date: "Dec 2024 – Present",
      content:
        "Developed internal UI library Jodo-UI to standardize design and accelerate feature development. Used Vite for faster builds and Storybook for component documentation and testing. Reduced UI regressions and improved feature delivery velocity across teams. The library serves as the foundation for consistent design patterns and reusable components throughout the organization.",
      imageUrl: "jodoUI-thumb-bw.svg",
    },
    // Perficient Projects
    {
      itemCount: 5,
      heading: "Data4You Project",
      description:
        "Led Next.js/Recoil integration for Data4You, enhancing J&J's data flow. Pioneered automated testing with Jest.",
      title: "Data4You for Johnson & Johnson",
      date: "2022-2024",
      content:
        "Led the front-end development of the Data4You web application for Johnson & Johnson, leveraging Next.js and Recoil for state-of-the-art state management. Spearheaded the integration of RESTful APIs using Fetch, enhancing seamless data flow and backend communication. Pioneered the implementation of automated testing frameworks, including Jest, to maintain high code quality and reliability. Played a key role in architecting scalable and responsive solutions, optimizing the application for cross-platform functionality.",
      imageUrl: "data4You-thumb-bw.svg",
    },
    {
      itemCount: 6,
      heading: "Cargill Project",
      description:
        "Managed Cargill's platform development with React/Redux, focusing on data handling and UX enhancement.",
      title: "Cargill Data Management Platform",
      date: "2022",
      imageUrl: "cargill-thumb-bw.svg",
      content:
        "As a Senior React Developer, orchestrated the development of Cargill's data management platform, focusing on robust data handling and user experience enhancement. Employed Redux for advanced state management, facilitating efficient data operations. Customized the user interface in alignment with client specifications using PrimeReact, ensuring a user-centric design. Fostered strong client relationships, actively gathering and implementing feedback to meet and exceed project requirements.",
    },
    {
      itemCount: 7,
      heading: "Envision Project",
      description:
        "Developed Envision's Angular-based UI, addressing complex data and security requirements in logistics management.",
      title: "Envision Enterprise Suite",
      date: "2022-Present",
      imageUrl: "envision-thumb-bw.svg",
      content:
        "Engaged in the Envision project, developing an enterprise suite of business tools for logistics management. Utilized Angular to construct a dynamic user interface, tackling complex data handling and security challenges. Collaborated with cross-functional teams to deploy advanced security measures, safeguarding sensitive enterprise data. Contributed to the continuous enhancement of the product, driving innovation and ensuring the delivery of a comprehensive business solution.",
    },
    // Freelance Projects
    {
      itemCount: 8,
      heading: "Don Mystic",
      description:
        "Luxury floating pavilion event venue website showcasing elegant boat experiences with stunning views and memorable events.",
      title: "Don Mystic - Floating Pavilion",
      date: "2024",
      content:
        "Developed a modern, elegant website for Don Mystic, a luxury floating pavilion event venue. The website showcases the unique venue that combines elegance with breathtaking views, specializing in private events, corporate events, and wedding receptions. Built with React.js, the site features a beautiful gallery, testimonials section, and comprehensive information about the venue's offerings. The project emphasizes luxury, elegance, and unforgettable experiences on the water.",
      imageUrl: "donMystic-thumb-bw.svg",
      projectUrl: "https://chacko-tourism.vercel.app/",
    },
    {
      itemCount: 9,
      heading: "Nexus Global United",
      description:
        "Industrial solutions provider website for oil & gas sector, featuring comprehensive product catalog and company information.",
      title: "Nexus Global United LLC",
      date: "2024",
      content:
        "Developed a comprehensive website for Nexus Global United LLC, a leading provider of industrial solutions including pipes, tubes, fittings, and related products for the oil and gas sector. The website features detailed product catalogs, company information, policies, and contact details. Built with modern web technologies, the site effectively communicates the company's global reach, local expertise, and commitment to delivering smart, sustainable solutions. The project showcases 20+ years of experience and highlights the company's mission, vision, and values.",
      imageUrl: "nexusGlobalUnited-thumb-bw.svg",
      projectUrl: "https://nexusglobal-united.com/",
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    setModalOpen(false);
  }, []);

  function modalIndicator(value) {
    value && setModalOpen(value);
  }

  return (
    <div
      className={`${styles.projects} ${
        modalOpen && styles.projectsNoAnimation
      }`}
    >
      <h2>Projects</h2>
      <div className={styles.cardList}>
        {projectsData.map((project, index) => (
          <Card
            key={index}
            itemCount={project.itemCount}
            heading={project.heading}
            description={project.description}
            details={project.details}
            title={project.title}
            date={project.date}
            content={project.content}
            imageUrl={project.imageUrl}
            modalIndicator={modalIndicator}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
