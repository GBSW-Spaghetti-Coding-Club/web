import React, { useState } from "react";
import styles from "./ImageGenerate.module.css";
import axiosInstance from "../../axios/axios";

function ImageGenerate() {
  const [clothing, setClothing] = useState("");
  const [hairStyle, setHairStyle] = useState("");
  const [hairColor, setHairColor] = useState("");
  const [gender, setGender] = useState("");
  const [generatedImage, setGeneratedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axiosInstance.get(`/api/gpt/generate-image`, {
        params: {
          clothing,
          hairStyle,
          hairColor,
          gender,
        },
      });
      setGeneratedImage(response.data.imageUrl);
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.imageGenerate}>
      <h2 className={styles.title}>프로필 생성</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          value={clothing}
          onChange={(e) => setClothing(e.target.value)}
          placeholder="의상색상"
          required
        />
        <input
          className={styles.input}
          type="text"
          value={hairStyle}
          onChange={(e) => setHairStyle(e.target.value)}
          placeholder="헤어스타일"
          required
        />
        <input
          className={styles.input}
          type="text"
          value={hairColor}
          onChange={(e) => setHairColor(e.target.value)}
          placeholder="헤어색상"
          required
        />
        <input
          className={styles.input}
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          placeholder="성별"
          required
        />
        <button className={styles.button} type="submit">
          생성
        </button>
      </form>
      <div className={styles.promptInstruction}>
        의상색상, 헤어스타일, 헤어색상, 성별 정보를 입력하고 프롬프트를
        만드세요!
      </div>
      {isLoading ? (
        <div className={styles.loadingContainer}>
          <div className={styles.loadingSpinner}></div>
          <p>이미지 생성 중...</p>
        </div>
      ) : generatedImage ? (
        <div className={styles.imageContainer}>
          <img
            src={generatedImage}
            alt="Generated"
            className={styles.generatedImage}
          />
          <a href={generatedImage} download={`generated-image.png`}>
            <button className={styles.saveButton}>사진 저장</button>
          </a>
        </div>
      ) : null}
    </div>
  );
}

export default ImageGenerate;
