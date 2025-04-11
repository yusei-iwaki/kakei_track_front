import React from "react";
import styles from "./page.module.scss";
import button from "@/styles/button.module.scss";

const RegisterPage: React.FC = () => {
  return (
    <div className={styles.container_flex}>
      <div className={styles.container}>
        <div className={styles.main}>
          <h1 className={styles.title}>会員登録してください</h1>
          <form className={styles.form_container}>
            <div className={styles.input_group}>
              <label htmlFor="name">ユーザー名</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={styles.input_group}>
              <label htmlFor="email">メールアドレス</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles.input_group}>
              <label htmlFor="password">パスワード（8文字以上）</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className={styles.input_button}>
              <button className={button.button_design1} type="submit">
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
