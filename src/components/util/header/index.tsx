"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import HeaderSidebar from "./header_sideBar";

const Header: FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth > 800);
    };

    // 初期値を設定
    handleResize();

    // リサイズイベントを監視
    window.addEventListener("resize", handleResize);

    // クリーンアップ
    return () => {
      console.log("クリーンアップが実行されました");
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className={styles.header}>
        <button onClick={toggleSidebar} className={styles.button}>
          <Image
            src="/images/icon/logo.png"
            alt="ロゴアイコン"
            width={30}
            height={30}
          ></Image>
        </button>
        <h1>家計簿アプリ</h1>
      </header>
      {!isVisible && (
        <HeaderSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
