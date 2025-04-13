import Header from "@/components/util/header/header";
import { ReactNode } from "react";
import styles from "./layout.module.scss";
import SideBar from "@/components/util/side_bar/sidebar";

const MemberLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <SideBar />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default MemberLayout;
