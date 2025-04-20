"use client";
import { FC, useState } from "react";
import styles from "./form.module.scss";
import button from "@/styles/button.module.scss";

interface ToggleButtonProps {
  route: string;
}

const Form: FC<ToggleButtonProps> = ({ route }) => {
  const categories = ["食費", "交通費", "娯楽", "水道光熱費", "その他"]; // サンプルデータ

  const entry = () => {
    alert("登録処理");
  };

  return (
    <form className={styles.form_container}>
      <div className={styles.form_item}>
        <label htmlFor="amount">金額</label>
        <input type="number" id="amount" name="amount" required />
      </div>

      <div className={styles.form_item}>
        <label htmlFor="category">費目</label>
        <select name="category" id="category">
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.form_item}>
        <label htmlFor="date">日付</label>
        <input type="date" name="date" id="date" />
      </div>

      <div className={styles.form_item}>
        <label htmlFor="comment">コメント</label>
        <input type="text" name="comment" id="comment" />
      </div>

      <button
        className={button.button_design1}
        style={{ marginTop: "2rem" }}
        onClick={entry}
      >
        登録
      </button>
    </form>
  );
};

export default Form;
