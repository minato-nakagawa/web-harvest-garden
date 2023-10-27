import type { Metadata } from "next";
import { notojp } from "./fonts";
import "@/styles/reset.css";

export const metadata: Metadata = {
  title: "WebHarvestGarden",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${notojp.variable}`}>{children}</body>
    </html>
  );
}
