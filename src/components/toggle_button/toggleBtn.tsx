"use client";

import { FC } from "react";
import styles from "./toggleBtn.module.scss";
import button from "@/styles/button.module.scss";
import { usePathname } from "next/navigation";
import { ToggleButtonType } from "@/types/type_toggle_button";
import Link from "next/link";

const sideBarFeatureItems: ToggleButtonType[] = [
  {
    type: "income",
    text: "収入",
    herf: "/member/entry/income",
  },
  {
    type: "expense",
    text: "支出",
    herf: "/member/entry/expense",
  },
  {
    type: "savings",
    text: "貯金",
    herf: "/member/entry/savings",
  },
];

interface ToggleButtonProps {
  route: string;
}

const ToggleButton: FC<ToggleButtonProps> = ({ route }) => {
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
