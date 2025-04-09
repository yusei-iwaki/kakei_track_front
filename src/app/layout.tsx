import type { Metadata } from "next";
import "./globals.css";

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
      <body className="min-h-screen flex items-center justify-center px-4">
        {children}
      </body>
    </html>
  );
}
