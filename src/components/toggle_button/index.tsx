"use client";

import { FC } from "react";
import styles from "./index.module.scss";
import button from "@/styles/button.module.scss";
import { ToggleButtonType } from "@/types/type_toggle_button";
import Link from "next/link";

interface ToggleButtonProps {
  route: string;
  pageType: string;
}

const ToggleButton: FC<ToggleButtonProps> = ({ route, pageType }) => {
  const sideBarFeatureItems: ToggleButtonType[] = [
    {
      type: "income",
      text: "収入",
      herf: `${
        pageType === "entry" ? "/member/entry/income" : "/member/records/income"
      }`,
    },
    {
      type: "expense",
      text: "支出",
      herf: `${
        pageType === "entry"
          ? "/member/entry/expense"
          : "/member/records/expense"
      }`,
    },
    {
      type: "savings",
      text: "貯金",
      herf: `${
        pageType === "entry"
          ? "/member/entry/savings"
          : "/member/records/savings"
      }`,
    },
  ];
  return (
    <div className={styles.btn_container}>
      {sideBarFeatureItems.map((item) => (
        <Link href={item.herf} key={item.type}>
          <button
            className={`${button.button_design2} ${
              item.type === route ? button.active : ""
            }`}
          >
            {item.text}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ToggleButton;
