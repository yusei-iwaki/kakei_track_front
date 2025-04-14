"use client";

import styles from "./sidebar.module.scss";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SideBarTypes } from "@/types/type_side_bar";

const sideBarFeatureItems: SideBarTypes[] = [
  {
    type: "entry",
    href: "/member/entry/income",
    src: "/images/icon/entry.png",
    alt: "入力ページ",
  },
  {
    type: "record",
    href: "/member/records/income",
    src: "/images/icon/record.png",
    alt: "グラフ表示ページ",
  },
];

const sideBarUtilItems: SideBarTypes[] = [
  {
    type: "settings",
    href: "/member/setting",
    src: "/images/icon/setting.png",
    alt: "設定ページ",
  },
  {
    type: "logout",
    href: "#",
    src: "/images/icon/logout.png",
    alt: "ログアウトページ",
  },
];

const SideBar: FC = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);

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
    isVisible && (
      <nav className={styles.side_bar}>
        <div className={styles.feature}>
          {sideBarFeatureItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.item} ${
                pathname.includes(item.type) ? styles.active : ""
              }`}
            >
              <Image src={item.src} alt={item.alt} width={30} height={30} />
            </Link>
          ))}
        </div>
        <div className={styles.feature}>
          {sideBarUtilItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.item} ${
                pathname === item.href ? styles.active : ""
              }`}
            >
              <Image src={item.src} alt={item.alt} width={30} height={30} />
            </Link>
          ))}
        </div>
      </nav>
    )
  );
};

export default SideBar;
