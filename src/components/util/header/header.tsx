import { FC } from "react";
import Image from "next/image";
import styles from "./header.module.scss";
import Link from "next/link";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Link href="/member/entry/income">
        <Image
          src="/images/icon/logo.png"
          alt="ロゴアイコン"
          width={30}
          height={30}
        ></Image>
      </Link>

      <h1>家計簿アプリ</h1>
    </header>
  );
};

export default Header;
