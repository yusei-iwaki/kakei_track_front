"use client";

import { FC, FormEvent } from "react";
import styles from "./page.module.scss";
import button from "@/styles/button.module.scss";

const RegisterPage: FC = () => {
  const handleRegister = (e: FormEvent) => {
    e.preventDefault;
    alert("会員登録処理");
  };
  return (
    <div className={styles.container_flex}>
      <div className={styles.container}>
        <div className={styles.main}>
          <h1 className={styles.title}>会員登録してください</h1>
          <form className={styles.form_container}>
            <div className={styles.input_group}>
              <label htmlFor="name">ユーザー名</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="山田太郎"
                required
              />
            </div>
            <div className={styles.input_group}>
              <label htmlFor="email">メールアドレス</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@example.com"
                required
              />
            </div>
            <div className={styles.input_group}>
              <label htmlFor="password">パスワード（8文字以上）</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="8文字以上のパスワード"
                required
              />
            </div>
            <div className={styles.input_button}>
              <button
                onClick={handleRegister}
                className={button.button_design1}
                type="submit"
              >
                会員登録
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
