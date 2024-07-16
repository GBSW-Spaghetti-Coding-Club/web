import React from "react";
import styles from "./TopNav.module.css";

function TopNav() {
  return (
    <nav className={styles.topNav}>
      <div className={styles.logo}>스파게티 코딩 클럽</div>
      <ul className={styles.navItems}>
        <li>
          <a href="/">홈</a>
        </li>
        <li>
          <a href="/info">사이트 정보</a>
        </li>
        <li>
          <a href="/image-generate">프로필 생성</a>
        </li>
        <li>
          <a href="/background-generate">배경 생성</a>
        </li>
      </ul>
    </nav>
  );
}

export default TopNav;
