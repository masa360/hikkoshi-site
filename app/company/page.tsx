import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "運営会社 | おおさか引越しナビ",
  description:
    "おおさか引越しナビを運営する会社の概要・所在地・事業内容についてご案内します。",
};

export default function CompanyPage() {
  const rows: { label: string; value: React.ReactNode }[] = [
    { label: "会社名", value: "（会社名は後日記載）" },
    { label: "代表者", value: "（代表者名は後日記載）" },
    { label: "設立", value: "（設立年月は後日記載）" },
    { label: "資本金", value: "（資本金は後日記載）" },
    {
      label: "所在地",
      value: (
        <>
          〒000-0000
          <br />
          大阪府大阪市〇〇区〇〇 0-0-0 〇〇ビル0F
        </>
      ),
    },
    { label: "電話番号", value: "0120-000-000（受付時間 9:00〜21:00 年中無休）" },
    { label: "FAX", value: "06-0000-0000" },
    { label: "メールアドレス", value: "info@example.com" },
    {
      label: "事業内容",
      value: (
        <ul className="list-disc space-y-1 pl-5">
          <li>引越し見積もり比較サイトの企画・運営</li>
          <li>インターネットメディアの企画・開発・運営</li>
          <li>マーケティング支援サービス</li>
          <li>各種広告業務</li>
        </ul>
      ),
    },
    {
      label: "取引銀行",
      value: (
        <>
          三菱UFJ銀行 〇〇支店
          <br />
          みずほ銀行 〇〇支店
        </>
      ),
    },
    {
      label: "加盟団体",
      value: "（必要に応じて記載）",
    },
  ];

  return (
    <main className="pb-20 md:pb-0">
      <Header />

      <section className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            運営会社
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            当サイト「おおさか引越しナビ」を運営する会社の概要は以下の通りです。
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label} className="border-b border-gray-100 last:border-0">
                    <th className="w-40 bg-gray-50 px-4 py-4 text-left align-top font-semibold text-gray-700 md:w-56">
                      {r.label}
                    </th>
                    <td className="px-4 py-4 text-gray-800">{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 rounded-lg bg-gray-50 p-6 text-sm text-gray-700">
            <h2 className="mb-2 text-base font-bold text-gray-900">
              ご利用にあたってのお願い
            </h2>
            <p className="leading-relaxed">
              当サイトに関するお問い合わせは、上記電話番号またはメールアドレスまでご連絡ください。
              引越し業者様への直接のお問い合わせは、各社にお願いいたします。
            </p>
          </div>

          <div className="mt-8 text-center">
            <a
              href="/"
              className="inline-block rounded-md border border-gray-300 bg-white px-6 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
            >
              トップページへ戻る
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
