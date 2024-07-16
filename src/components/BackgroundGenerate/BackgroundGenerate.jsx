import React, { useState } from "react";
import styles from "./BackgroundGenerate.module.css";
import axiosInstance from "../../axios/axios";

function BackgroundGenerate() {
  const [nature, setNature] = useState("");
  const [generatedBackground, setGeneratedBackground] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axiosInstance.get(
        `http://52.79.117.216:3030/api/gpt/drawPaint`,
        {
          params: {
            nature,
          },
        }
      );
      setGeneratedBackground(response.data.drawUrl);
    } catch (error) {
      console.error("Error generating background:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.imageGenerate}>
      <h2 className={styles.title}>배경 생성</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          value={nature}
          onChange={(e) => setNature(e.target.value)}
          placeholder="배경"
          required
        />
        <button className={styles.button} type="submit">
          생성
        </button>
      </form>
      <div className={styles.promptInstruction}>
        배경을 입력하고 프롬프트를 만드세요!
      </div>
      {isLoading ? (
        <div className={styles.loadingContainer}>
          <div className={styles.loadingSpinner}></div>
          <p>이미지 생성 중...</p>
        </div>
      ) : generatedBackground ? (
        <div className={styles.imageContainer}>
          <img
            src={generatedBackground}
            alt="Generated"
            className={styles.generatedBackground}
          />
          <a href={generatedBackground} download={`generated-image.png`}>
            <button className={styles.saveButton}>사진 저장</button>
          </a>
        </div>
      ) : null}
    </div>
  );
}

export default BackgroundGenerate;
