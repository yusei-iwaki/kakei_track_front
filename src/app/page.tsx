import Link from "next/link";
import styles from "./page.module.scss";

const LP = () => {
  return (
    <div className={styles.content}>
      <div className={styles.container_flex}>
        <div className={styles.container}>
          <div className={styles.main}>
            <h1 className={styles.title}>家計簿アプリ</h1>
            <div className={styles.description}>
              <Link href="/account/register" className={styles.link}>
                会員登録
              </Link>
              <Link href="/account/login" className={styles.link}>
                ログイン
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LP;
