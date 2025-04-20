import ToggleBtn from "@/components/toggle_button/toggleBtn";
import { FC } from "react";
import styles from "./page.module.scss";
import Form from "@/components/entry_form/form";

const EntryIncomePage = ({ params }: { params: { type: string } }) => {
  return (
    <>
      <ToggleBtn route={params.type} />
      <Form route={params.type} />
    </>
  );
};

export default EntryIncomePage;
