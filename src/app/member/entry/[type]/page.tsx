import ToggleBtn from "@/components/toggle_button/toggleBtn";
import { FC } from "react";
import styles from "./page.module.scss";

const EntryIncomePage = ({ params }: { params: { type: string } }) => {
  return (
    <>
      <ToggleBtn route={params.type} />
      <h1>収入入力ページ</h1>
    </>
  );
};

export default EntryIncomePage;
