import Image from "next/image";
import styles from "./index.module.scss";

const Loading = () => {
  return (
    <div className={styles.loading_container}>
      <h1 className={styles.title}>Loading...</h1>
      <div className={styles.spin_container}>
        <Image
          className={styles.center}
          src="/images/icon/logo.png"
          alt="Loading"
          width={70}
          height={70}
        />
        <Image
          className={styles.rotating1}
          src="/images/icon/coin.png"
          alt="coin"
          width={20}
          height={20}
        />
        <Image
          className={styles.rotating2}
          src="/images/icon/coin.png"
          alt="coin"
          width={20}
          height={20}
        />
        <Image
          className={styles.rotating3}
          src="/images/icon/coin.png"
          alt="coin"
          width={20}
          height={20}
        />
        <Image
          className={styles.rotating4}
          src="/images/icon/coin.png"
          alt="coin"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default Loading;
