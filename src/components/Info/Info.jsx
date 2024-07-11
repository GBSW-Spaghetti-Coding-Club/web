import React from "react";
import styles from "./Info.module.css";
import openai from "./images/openai.webp";
import nestjs from "./images/nest.png";
import reactjs from "./images/React-icon.svg.png";
import gitactions from "./images/github-actions.png";
import aws from "./images/aws.png";
import docker from "./images/docker.png";
import terraform from "./images/terraform.png";

function Info() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>UI/UX Design</h2>
        <p className={styles.subtitle}>Spaghetti Coding Club</p>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>ReactJS Frontend</h3>
          <img src={reactjs} alt="reactjs" className={styles.sectionImage} />
        </div>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>NestJS Backend</h3>
          <img src={nestjs} alt="nestjs" className={styles.sectionImage} />
        </div>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>AWS</h3>
          <img src={aws} alt="aws" className={styles.sectionImage} />
        </div>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Docker</h3>
          <img src={docker} alt="docker" className={styles.sectionImage} />
        </div>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Terraform</h3>
          <img
            src={terraform}
            alt="terraform"
            className={styles.sectionImage}
          />
        </div>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Github Actions</h3>
          <img
            src={gitactions}
            alt="gitactions"
            className={styles.sectionImage}
          />
        </div>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Prompt</h3>
          <p className={styles.subtitle}>Prompt Engineering</p>
        </div>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Source Code</h3>
          <p className={styles.sectionText}>
            https://github.com/orgs/GBSW-Spaghetti-Coding-Club/repositories
          </p>
        </div>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Copyright</h3>
          <p className={styles.sectionText}>© 2024. Spaghetti Coding Club</p>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerItem}>
          <img
            src={openai}
            alt="Powered by ChatGPT API"
            className={styles.footerImage}
          />
          <p>Powered by ChatGPT API</p>
        </div>
        <div className={styles.footerItem}>
          <a
            href="https://github.com/GBSW-Spaghetti-Coding-Club"
            className={styles.github}
            target="_blank"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default Info;
