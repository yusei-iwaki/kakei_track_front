import Header from "@/components/util/header";
import { ReactNode } from "react";
import styles from "./layout.module.scss";
import SideBar from "@/components/util/side_bar";
import { Suspense } from "react";
import Loading from "@/components/util/loading";

const MemberLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <SideBar />
        <Suspense fallback={<Loading />}>
          <div className={styles.content}>{children}</div>
        </Suspense>
      </div>
    </>
  );
};

export default MemberLayout;
