import type { Metadata } from "next";
import "./globals.css";
import styles from "./layout.module.scss";

export const metadata: Metadata = {
  title: "家計簿アプリ",
  description: "web上で管理できる家計簿アプリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
