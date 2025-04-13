import ToggleBtn from "@/components/toggle_button/toggleBtn";
import { FC } from "react";
import styles from "./page.module.scss";

const EntryIncomePage = ({ params }: { params: { type: string } }) => {
  console.log(params);
  return (
    <div className={styles.mainContent}>
      <ToggleBtn />
      <h1>収入入力ページ</h1>
    </div>
  );
};

export default EntryIncomePage;
