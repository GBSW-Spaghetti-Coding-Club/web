import React from "react";
import styles from "./Home.module.css";
import Sphagetti from "./images/sphagetti.jpeg";

function Home() {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={Sphagetti} alt="스파게티 코딩 클럽" />
      <h1 className={styles.title}>Welcome to the Spaghetti Coding Club</h1>
      <p className={styles.description}>
        Complete the prompts to create your profile
      </p>
    </div>
  );
}

export default Home;
