import Header from "@/components/util/header/header";
import { ReactNode } from "react";
import styles from "./layout.module.scss";

const MemberLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default MemberLayout;
