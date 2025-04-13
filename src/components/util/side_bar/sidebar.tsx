"use client";

import styles from "./sidebar.module.scss";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SideBarTypes } from "@/types/type_side_bar";

const sideBarFeatureItems: SideBarTypes[] = [
  {
    href: "/member/entry/income",
    src: "/images/icon/entry.png",
    alt: "入力ページ",
  },
  {
    href: "/member/records/income",
    src: "/images/icon/record.png",
    alt: "グラフ表示ページ",
  },
];

const sideBarUtilItems: SideBarTypes[] = [
  {
    href: "/member/setting",
    src: "/images/icon/setting.png",
    alt: "設定ページ",
  },
  {
    href: "#",
    src: "/images/icon/logout.png",
    alt: "ログアウトページ",
  },
];

const SideBar: FC = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.side_bar}>
      <div className={styles.feature}>
        {sideBarFeatureItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${styles.item} ${
              pathname === item.href ? styles.active : ""
            }`}
          >
            <Image src={item.src} alt={item.alt} width={60} height={60} />
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
            <Image src={item.src} alt={item.alt} width={60} height={60} />
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default SideBar;
