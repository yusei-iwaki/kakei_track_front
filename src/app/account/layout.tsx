import { ReactNode } from "react";
import styles from "./layout.module.scss";

const AccountLayout = ({ children }: { children: ReactNode }) => {
  return <div className={styles.content}>{children}</div>;
};

export default AccountLayout;
