import type { Metadata } from "next";
import "./globals.css";
import styles from "./layout.module.scss";

export const metadata: Metadata = {
  title: "家計簿アプリ",
  description: "家計簿アプリの説明",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <main className={styles.main}>
          <div className={styles.container}>{children}</div>
        </main>
      </body>
    </html>
  );
}
