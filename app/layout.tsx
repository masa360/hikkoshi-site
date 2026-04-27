import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "大阪市の引越し見積もり比較 | おおさか引越しナビ",
  description:
    "大阪市の引越し見積もりを最大10社一括比較！最短1分で完了、最大50%OFF。単身・ファミリー対応の無料サービス。",
  keywords: ["大阪市", "引越し", "見積もり", "比較", "一括見積もり", "引っ越し"],
  openGraph: {
    title: "大阪市の引越し見積もり比較 | おおさか引越しナビ",
    description: "最大10社の引越し料金を無料一括比較。最大50%OFF！",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
