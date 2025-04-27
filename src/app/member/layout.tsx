import Header from "@/components/util/header";
import { ReactNode } from "react";
import styles from "./layout.module.scss";
import SideBar from "@/components/util/side_bar";

const MemberLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <SideBar />
        <div className={styles.content}>{children}</div>
      </div>
    </>
  );
};

export default MemberLayout;
